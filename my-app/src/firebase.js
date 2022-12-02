import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVnXXEUy3ujtvX_m7ldMnVk3gxK3AdirA",
  authDomain: "total-time-tracker.firebaseapp.com",
  projectId: "total-time-tracker",
  storageBucket: "total-time-tracker.appspot.com",
  messagingSenderId: "723368614506",
  appId: "1:723368614506:web:86551d0b0ce35149744813",
  measurementId: "G-KCGZMDQWRT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
