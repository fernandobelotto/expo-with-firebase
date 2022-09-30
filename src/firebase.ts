import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { config } from "./config";

const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
