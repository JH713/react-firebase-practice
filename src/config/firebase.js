import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdsPnF_PbuEfQul95KdffNj5bUer3ab3c",
  authDomain: "test-3a940.firebaseapp.com",
  projectId: "test-3a940",
  storageBucket: "test-3a940.appspot.com",
  messagingSenderId: "327020271411",
  appId: "1:327020271411:web:956dc84d653f439661d046",
  measurementId: "G-KMRM5YYRE1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app); 
export const storage = getStorage(app);