// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcJTGtUmjDGvXYF87AkEFrmddFD-Xs-J0",
  authDomain: "netflixgpt-94945.firebaseapp.com",
  projectId: "netflixgpt-94945",
  storageBucket: "netflixgpt-94945.appspot.com",
  messagingSenderId: "599351966400",
  appId: "1:599351966400:web:85a17142c6a395cc4fcb25",
  measurementId: "G-GLH4C7SKC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();