import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtayveOQBhXw5fqejSUZGW_Ww4sxO8Mgg",
  authDomain: "tidy-hold-337408.firebaseapp.com",
  projectId: "tidy-hold-337408",
  storageBucket: "tidy-hold-337408.appspot.com",
  messagingSenderId: "188094564874",
  appId: "1:188094564874:web:947d9af319c87e2ce4adf3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

