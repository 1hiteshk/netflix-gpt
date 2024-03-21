// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1N6fIIa0UfVvoN_8xkV7l1HGTRK5282Y",
  authDomain: "netflixgpt-b1014.firebaseapp.com",
  projectId: "netflixgpt-b1014",
  storageBucket: "netflixgpt-b1014.appspot.com",
  messagingSenderId: "39747197308",
  appId: "1:39747197308:web:d785cb39b19845e6ffecf9",
  measurementId: "G-CN6BXNJ378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
