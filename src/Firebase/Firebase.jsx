import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI9x7WFBYcBeYJKtGOSCEGINmD5dARhw0",
  authDomain: "practice-c59ca.firebaseapp.com",
  projectId: "practice-c59ca",
  storageBucket: "practice-c59ca.firebasestorage.app",
  messagingSenderId: "535318851486",
  appId: "1:535318851486:web:d4cf0b013e45751276308f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
