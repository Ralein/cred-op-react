// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABqRhLdXvEAORLg0aXnaRb1VRPDwPKFT0",
  authDomain: "fir-36629.firebaseapp.com",
  projectId: "fir-36629",
  storageBucket: "fir-36629.firebasestorage.app",
  messagingSenderId: "747274731285",
  appId: "1:747274731285:web:6af738806e4970774c731c",
  measurementId: "G-0SER3N54H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };