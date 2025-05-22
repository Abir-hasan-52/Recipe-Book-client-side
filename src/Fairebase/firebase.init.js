// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWkrO_6ULFAxd3iyvdlNn2lPGTEQRw2xc",
  authDomain: "recipe-book-app-62bc2.firebaseapp.com",
  projectId: "recipe-book-app-62bc2",
  storageBucket: "recipe-book-app-62bc2.firebasestorage.app",
  messagingSenderId: "208237624868",
  appId: "1:208237624868:web:b6f7179b24697b17f6a2b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;