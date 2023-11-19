// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "alkmewa-bakery.firebaseapp.com",
  projectId: "alkmewa-bakery",
  storageBucket: "alkmewa-bakery.appspot.com",
  messagingSenderId: "575450922462",
  appId: "1:575450922462:web:888c64719ef420b311b14f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initializa db
export const db = getFirestore(app);
// initialize auth
export const auth = getAuth(app);
//initialize storage
export const storage = getStorage(app);
