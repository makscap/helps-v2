import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxjmDJVM8rcc28nDvMAuH4vIsZkZyQwD8",
  authDomain: "helps-9814f.firebaseapp.com",
  projectId: "helps-9814f",
  storageBucket: "helps-9814f.appspot.com",
  messagingSenderId: "549871292538",
  appId: "1:549871292538:web:9cef1aa0cec522d092abc3",
  measurementId: "G-Y81L8CKYBE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
