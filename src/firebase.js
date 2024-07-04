import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDu32ndhMA4yjU47uaQu6uuah8h-x5IYLA",
  authDomain: "disneyplus-clone-998eb.firebaseapp.com",
  projectId: "disneyplus-clone-998eb",
  storageBucket: "disneyplus-clone-998eb.appspot.com",
  messagingSenderId: "425004486805",
  appId: "1:425004486805:web:d700bfcc52066c93c58b9c",
  measurementId: "G-WDFWJVXXBX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);

// Set up Google Auth Provider
const provider = new GoogleAuthProvider();

// Initialize Firebase Storage
const storage = getStorage(firebaseApp);

export { auth, provider, signInWithPopup, storage };
export default db;
