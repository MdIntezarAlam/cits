import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-xZS8f09TCVrfcRv1NyRaZU5Bbk6Qjzo",
  authDomain: "citsresumes.firebaseapp.com",
  projectId: "citsresumes",
  storageBucket: "citsresumes.appspot.com",
  messagingSenderId: "608166936571",
  appId: "1:608166936571:web:b9bbc9ba3e8b3b4bd5155e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;