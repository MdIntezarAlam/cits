
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwpD4SP9dIqYyGBj_GNMsNkZoLsRgHG7Q",
  authDomain: "citsresumakerdb.firebaseapp.com",
  projectId: "citsresumakerdb",
  storageBucket: "citsresumakerdb.appspot.com",
  messagingSenderId: "352765004404",
  appId: "1:352765004404:web:e45636d4eed5cc15145f21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;