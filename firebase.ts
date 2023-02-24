import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUu3ICE8m4pJhdcXFz0EOcWGOev8ZWDxg",
  authDomain: "gpt-typescript.firebaseapp.com",
  projectId: "gpt-typescript",
  storageBucket: "gpt-typescript.appspot.com",
  messagingSenderId: "81688135779",
  appId: "1:81688135779:web:89af8cefb9da3fcefad056",
  measurementId: "G-LMYX57FJMT"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }