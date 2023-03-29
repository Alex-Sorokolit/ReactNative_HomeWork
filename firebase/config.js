// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEnBti8wPrEP__NBlfHU4xq_ERGfkTojw",
  authDomain: "rn-social-2b0ce.firebaseapp.com",
  databaseURL: "https://rn-social-2b0ce-default-rtdb.firebaseio.com",
  projectId: "rn-social-2b0ce",
  storageBucket: "rn-social-2b0ce.appspot.com",
  messagingSenderId: "232037460964",
  appId: "1:232037460964:web:d75a67a82dadd5d2fd35f1",
  measurementId: "G-DC2LXDWFJ9",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;
