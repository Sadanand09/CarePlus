import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAHns8N002pBgE3346Z7GT743G9ILNPx5I",
  authDomain: "carepulse-77ffd.firebaseapp.com",
  projectId: "carepulse-77ffd",
  storageBucket: "carepulse-77ffd.appspot.com",
  messagingSenderId: "428898507869",
  appId: "1:428898507869:web:064287bc179f9aa91441b4",
  measurementId: "G-BE8WZLZ4WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};