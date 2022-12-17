import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuNDcM3X_F_5rF2DKH3MUwW6RS67M7S1E",
  authDomain: "house-marketplace-app-e6031.firebaseapp.com",
  projectId: "house-marketplace-app-e6031",
  storageBucket: "house-marketplace-app-e6031.appspot.com",
  messagingSenderId: "782625909806",
  appId: "1:782625909806:web:7cbb6bf438dfe0444083bf"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };