// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-c2577.firebaseapp.com",
  projectId: "realestate-c2577",
  storageBucket: "realestate-c2577.appspot.com",
  messagingSenderId: "915037964987",
  appId: "1:915037964987:web:7ee3221123c513a8f0379e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);