import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkTf_fXWL-AgOlDZpwgEouE9lAudQVDLk",
    authDomain: "ikt205-assignment1.firebaseapp.com",
    projectId: "ikt205-assignment1",
    storageBucket: "ikt205-assignment1.appspot.com",
    messagingSenderId: "578049399692",
    appId: "1:578049399692:web:0c682a8c60759878c1d4a9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};