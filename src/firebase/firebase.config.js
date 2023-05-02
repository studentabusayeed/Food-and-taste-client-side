// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8PAu0NEbmWWZbznSYSf8SlwltJuOnLoU",
  authDomain: "food-and-taste-recipe.firebaseapp.com",
  projectId: "food-and-taste-recipe",
  storageBucket: "food-and-taste-recipe.appspot.com",
  messagingSenderId: "907364333845",
  appId: "1:907364333845:web:89330854369587ba26511c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;