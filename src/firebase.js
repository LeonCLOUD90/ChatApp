import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaHDy5f7wiYgjTBJmBSjoliw02WSscl_s",
  authDomain: "chat-58606.firebaseapp.com",
  projectId: "chat-58606",
  storageBucket: "chat-58606.appspot.com",
  messagingSenderId: "537971922641",
  appId: "1:537971922641:web:5df3fb4aecdc8e760417f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()