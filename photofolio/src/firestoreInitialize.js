// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAig5dPrKail2zT0HBpYVYeLuzc61MC4C8",
  authDomain: "photofolio-642ca.firebaseapp.com",
  projectId: "photofolio-642ca",
  storageBucket: "photofolio-642ca.firebasestorage.app",
  messagingSenderId: "17229067943",
  appId: "1:17229067943:web:b4585991ee4620337b8d82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);