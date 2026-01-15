// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSeNZUuaTczllXXbz3Pf2tbGdxwYgssoE",
  authDomain: "protecvist.firebaseapp.com",
  projectId: "protecvist",
  storageBucket: "protecvist.firebasestorage.app",
  messagingSenderId: "276550364329",
  appId: "1:276550364329:web:3dc39afa84e62f7108cdb8",
  measurementId: "G-83XWNN590W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
