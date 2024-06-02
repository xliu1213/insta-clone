import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIWwD3-EPRuJYH9G4D4OUaDP4D94xpNhQ",
  authDomain: "insta-clone-23c6f.firebaseapp.com",
  projectId: "insta-clone-23c6f",
  storageBucket: "insta-clone-23c6f.appspot.com",
  messagingSenderId: "711354897429",
  appId: "1:711354897429:web:42c8c6752528cdb08bea1c",
  measurementId: "G-HV2F0GQW5R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, auth, firestore, storage}