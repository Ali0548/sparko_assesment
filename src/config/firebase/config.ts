// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import "firebase/functions";
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { FirebaseConfig } from './types';

const firebaseConfig = {
    apiKey: "AIzaSyA3qSp1hIHRv5TZCT4WjFzSio9qPGfikrA",
    authDomain: "spark0548.firebaseapp.com",
    projectId: "spark0548",
    storageBucket: "spark0548.appspot.com",
    messagingSenderId: "106487998384",
    appId: "1:106487998384:web:63cbf811a36b370bde9875"
} as FirebaseConfig;
// Later replace with environment variables



// Initializing the firebase ---> Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
connectFirestoreEmulator(db, '127.0.0.1', 500)
export {
    db
}