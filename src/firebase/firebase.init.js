// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6DE2_eXuUlhZCq5_6FMVzxTRKmfg6jPM",
  authDomain: "assignment10-45536.firebaseapp.com",
  projectId: "assignment10-45536",
  storageBucket: "assignment10-45536.firebasestorage.app",
  messagingSenderId: "150171377572",
  appId: "1:150171377572:web:c86a83479126f6aa146b31"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
