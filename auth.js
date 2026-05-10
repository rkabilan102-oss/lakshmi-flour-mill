// Firebase Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDoojx1yz5yXTjx1bWIRZLxKuGSwYTtEv8",
  authDomain: "lakshmi-flour-mill-36db5.firebaseapp.com",
  projectId: "lakshmi-flour-mill-36db5",
  storageBucket: "lakshmi-flour-mill-36db5.firebasestorage.app",
  messagingSenderId: "537203846814",
  appId: "1:537203846814:web:6ca24cf9e5815e0e21558f",
  measurementId: "G-MY6NJDX6X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SIGNUP
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup Successful");
    })
    .catch((error) => {
      alert(error.message);
    });
};

// LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful");
    })
    .catch((error) => {
      alert(error.message);
    });
};

// LOGOUT
window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("Logout Successful");
    })
    .catch((error) => {
      alert(error.message);
    });
};