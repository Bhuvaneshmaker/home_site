import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDahep9xxUCcP2WJtAdP-BsBTTdOd300vg",
  authDomain: "bhuvidevo-homesite.firebaseapp.com",
  projectId: "bhuvidevo-homesite",
  storageBucket: "bhuvidevo-homesite.firebasestorage.app",
  messagingSenderId: "476984524279",
  appId: "1:476984524279:web:673b415f5262f9ab2402f2",
  measurementId: "G-28JB8NB95M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
