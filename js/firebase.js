  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBVja107BE8mstfEqsfFd6P8hTy7yPFvkk",
    authDomain: "brayanforognosis.firebaseapp.com",
    projectId: "brayanforognosis",
    storageBucket: "brayanforognosis.appspot.com",
    messagingSenderId: "896034702489",
    appId: "1:896034702489:web:d52b136f8d58a432092408",
    measurementId: "G-N0CGEBH03S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
