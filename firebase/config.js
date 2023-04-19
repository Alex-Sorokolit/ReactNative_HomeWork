import { initializeApp } from "firebase/app";

// Firebase configuration
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
export const app = initializeApp(firebaseConfig);

/* 
Створення проекту firebase
https://console.firebase.google.com/

Залогінитись на сайті через gogle mail
Створити проект
Додати розділ Autentication та RealtimeDatabase

Зайти в налаштування проекту і додати додаток (web app)
Скопіювати параметри

Встановити firebase: npm install firebase
Створити файл firebase/config.js і вставити скопійовані параметри
*/
