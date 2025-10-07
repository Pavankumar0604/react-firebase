import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArLNXTPQ6616nCF2HlFA2mfbIf3vuWPXo",
  authDomain: "react-firebase-project-f1414.firebaseapp.com",
  projectId: "react-firebase-project-f1414",
  storageBucket: "react-firebase-project-f1414.firebasestorage.app",
  messagingSenderId: "812447676569",
  appId: "1:812447676569:web:8c408faaf6fa95803ba008",
  measurementId: "G-3W57WCGBPN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export default app;