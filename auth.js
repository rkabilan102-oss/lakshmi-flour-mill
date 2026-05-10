// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);