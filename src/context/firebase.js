import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrCjSSHcpIzRI3Jc2ltDaSps9dliKBmJE",
  authDomain: "citsres.firebaseapp.com",
  projectId: "citsres",
  storageBucket: "citsres.appspot.com",
  messagingSenderId: "544996882934",
  appId: "1:544996882934:web:5ea72cfa33795421efafd7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

