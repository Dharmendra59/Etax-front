// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKWgkFvxualZfWkiWBMn_HdRocHxmdOc0",
  authDomain: "e-tax-a8a8b.firebaseapp.com",
  projectId: "e-tax-a8a8b",
  storageBucket: "e-tax-a8a8b.firebasestorage.app",
  messagingSenderId: "94422938394",
  appId: "1:94422938394:web:8e594aa16b0187b60d32a3",
  measurementId: "G-QQJ2FWTJBT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
