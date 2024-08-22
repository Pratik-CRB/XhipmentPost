// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyZLsAevUreXReOsI8BAVMophMWVkToHc",
  authDomain: "xhipmentpost.firebaseapp.com",
  projectId: "xhipmentpost",
  storageBucket: "xhipmentpost.appspot.com",
  messagingSenderId: "810565082934",
  appId: "1:810565082934:web:5a758320e5606621e35d97",
  measurementId: "G-2B6EE7X020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};