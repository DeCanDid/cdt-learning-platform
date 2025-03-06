// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2lysYQlJ7fEM4xN-2qhWsapkhvvGANDQ",
  authDomain: "cdt-auth-96b95.firebaseapp.com",
  projectId: "cdt-auth-96b95",
  storageBucket: "cdt-auth-96b95.firebasestorage.app",
  messagingSenderId: "256708589534",
  appId: "1:256708589534:web:3c63d81c44e4ec43850f4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;