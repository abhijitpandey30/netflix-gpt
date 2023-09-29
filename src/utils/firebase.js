// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClTKERVSxU9ZFffZimCI7CmnsOgM1Nfyc",
  authDomain: "netflixgpt-f9665.firebaseapp.com",
  projectId: "netflixgpt-f9665",
  storageBucket: "netflixgpt-f9665.appspot.com",
  messagingSenderId: "843800757574",
  appId: "1:843800757574:web:da19faa376f7c1cf7bd147",
  measurementId: "G-S6B78NC4G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();