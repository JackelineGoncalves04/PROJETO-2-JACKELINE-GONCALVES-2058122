// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaoMW5GIspVcNz3OoerkH29QBRmEWOWdA",
  authDomain: "projeto-front-end-41d26.firebaseapp.com",
  projectId: "projeto-front-end-41d26",
  storageBucket: "projeto-front-end-41d26.appspot.com",
  messagingSenderId: "570894989534",
  appId: "1:570894989534:web:9705fb1f66011f38d42a4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export{
    db,
    auth
}