import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { db } from "./firebase";

function writeUserData(name: string) {
  set(ref(db, "users"), {
    username: name,
  })
    .then(console.log)
    .catch(console.log);
}

export default function RealTimeInput() {
  const [name, setName] = useState("");
  useEffect(() => {
    writeUserData(name);
  }, [name]);

  useEffect(() => {
    return onValue(ref(db, "users/username"), (snapshot) => {
      setName(snapshot.val());
    });
  }, []);

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 22 }}>Hello Firebase</Text>
        <Text style={{ marginVertical:10, fontSize: 14 }}>Start typing..</Text>
        <TextInput
          onChangeText={setName}
          value={name}
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "black",
            minWidth: 300,
            marginHorizontal: 20
          }}
        />
      </View>
    </>
  );
}
