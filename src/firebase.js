// src/firebase.js
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAhyXzJPPZWg336WjsY5mdXKm9rkWzt4Tc",
    authDomain: "marcel-61c2f.firebaseapp.com",
    projectId: "marcel-61c2f",
    storageBucket: "marcel-61c2f.firebasestorage.app",
    messagingSenderId: "833878578327",
    appId: "1:833878578327:web:c6e0cae7355ad41c11c5d2",
    measurementId: "G-46RLZ1FZ73"
  };

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()