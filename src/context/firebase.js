import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqSfxPV492IpFkVjFAMilI_mClTor-n20",
  authDomain: "citsresumemakerdatabase.firebaseapp.com",
  projectId: "citsresumemakerdatabase",
  storageBucket: "citsresumemakerdatabase.appspot.com",
  messagingSenderId: "406209140194",
  appId: "1:406209140194:web:7b1eb667b1c390f7d295bb",
  measurementId: "G-QG640EP3P4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;