import { StyleSheet, View } from "react-native";
import RealTimeInput from "./src/RealTimeInput";

export default function App() {
  return (
    <View style={styles.container}>
      <RealTimeInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
