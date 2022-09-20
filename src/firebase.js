import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-cec7c.firebaseapp.com",
  projectId: "tutorial-cec7c",
  storageBucket: "tutorial-cec7c.appspot.com",
  messagingSenderId: "1081109078085",
  appId: "1:1081109078085:web:13ac734908646f578b832c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);