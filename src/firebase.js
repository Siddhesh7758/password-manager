import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPbedHk-A-6z7FbO6kTNffqyd-f_p1dko",
  authDomain: "password-manager01.firebaseapp.com",
  projectId: "password-manager01",
  storageBucket: "password-manager01.appspot.com",
  messagingSenderId: "834392671987",
  appId: "1:834392671987:web:95de301cb851b05a93d986",
  measurementId: "G-J90M9EM2E9"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);


