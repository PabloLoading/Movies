// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgXZFqaUs8ry1ZilXPOPxZZbUTeVNZSxg",
  authDomain: "movies-1bda3.firebaseapp.com",
  projectId: "movies-1bda3",
  storageBucket: "movies-1bda3.appspot.com",
  messagingSenderId: "740083473080",
  appId: "1:740083473080:web:ff26dbed808fb8edd4b24d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
