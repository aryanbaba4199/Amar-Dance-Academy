import { initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOzUap_2bp6ReHxKrBf1KSf5o26VpC440",
  authDomain: "amar-dance-academy.firebaseapp.com",
  projectId: "amar-dance-academy",
  storageBucket: "amar-dance-academy.appspot.com",
  messagingSenderId: "816600294682",
  appId: "1:816600294682:web:fd274d8dd827569849b8a3",
  measurementId: "G-Z407F9DG17"
};

let app;

try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  app = getApp();
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };