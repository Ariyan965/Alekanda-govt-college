// firebase.js
// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// তোমার Firebase কনফিগ বসাও এখানে
const firebaseConfig = {
  apiKey: "AIzaSyDGQEy-SpgfvwMhfKckSBE1xxxxxxx",
  authDomain: "alekanda-govt-college.firebaseapp.com",
  projectId: "alekanda-govt-college",
  storageBucket: "alekanda-govt-college.appspot.com",
  messagingSenderId: "823002328134",
  appId: "1:823002328134:web:aef869f3xxxxxx",
  measurementId: "G-BYT607701W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, deleteDoc, doc };
