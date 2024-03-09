import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getstorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPgpUn0oF_zQDpSkKK-JEw9-vTtu8P0H0",
  authDomain: "instagram-clone-e1b94.firebaseapp.com",
  projectId: "instagram-clone-e1b94",
  storageBucket: "instagram-clone-e1b94.appspot.com",
  messagingSenderId: "567407965032",
  appId: "1:567407965032:web:bf1ed2de038cbba35a5cdd",
  measurementId: "G-V9D268J5CT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage}