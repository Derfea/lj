// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcpUK3yrk37fYcwqWtzz3L4RgISNmTDgY",
  authDomain: "procompletions.firebaseapp.com",
  projectId: "procompletions",
  storageBucket: "procompletions.appspot.com",
  messagingSenderId: "443440608713",
  appId: "1:443440608713:web:e0c6d6d5601c2702b2a418",
  measurementId: "G-60ZTFY3K7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
