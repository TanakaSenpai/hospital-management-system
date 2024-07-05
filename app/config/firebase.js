// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCURNAe6oSfZoa1-iMzbld8YjTtR_3p-ns",
  authDomain: "hospital-management-syst-7deb2.firebaseapp.com",
  projectId: "hospital-management-syst-7deb2",
  storageBucket: "hospital-management-syst-7deb2.appspot.com",
  messagingSenderId: "544375076480",
  appId: "1:544375076480:web:a0bd9401624db977955865",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;
