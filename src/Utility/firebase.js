// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_1KVk_lvrKEYAkGfhIhUQ7dawpYQkWbo",
  authDomain: "alone-fa57b.firebaseapp.com",
  projectId: "alone-fa57b",
  storageBucket: "alone-fa57b.firebasestorage.app",
  messagingSenderId: "1087758277792",
  appId: "1:1087758277792:web:c8b675c119dc091ad8bdc5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = app.firestore()

export default auth