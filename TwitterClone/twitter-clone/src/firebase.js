import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import {getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATFqHrBQ3rk7Bd8EyOva5ArqnPmh4Uzyo",
    authDomain: "twitter-clone-a0f11.firebaseapp.com",
    projectId: "twitter-clone-a0f11",
    storageBucket: "twitter-clone-a0f11.appspot.com",
    messagingSenderId: "1074599346009",
    appId: "1:1074599346009:web:7200c783e59a37eb7a9648",
    measurementId: "G-EBLTSXCQ8H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db; 

export const auth=getAuth(app);