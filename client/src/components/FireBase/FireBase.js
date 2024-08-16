import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

//Your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtD325Lilg5eRnUlWNm5-ku2AMTikykcE",
  authDomain: "careplus-fb089.firebaseapp.com",
  projectId: "careplus-fb089",
  storageBucket: "careplus-fb089.appspot.com",
  messagingSenderId: "900236438472",
  appId: "1:900236438472:web:fe4de8a9036d2665b2aefd",
  measurementId: "G-8F72CVK04N",
};

//Initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth};
