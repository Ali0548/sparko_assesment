// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import "firebase/functions";
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { FirebaseConfig } from './types';

const firebaseConfig = {
    apiKey: "Your API KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_DOMAIN",
    messagingSenderId: "YOUR_MESSAGE_ID",
    appId: "YOUR_APP_ID"
} as FirebaseConfig;
// Later replace with environment variables



// Initializing the firebase ---> Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
connectFirestoreEmulator(db, '127.0.0.1', 500)
export {
    db
}
