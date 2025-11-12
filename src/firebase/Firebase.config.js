// src/firebase/Firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8W_-lTzTt-9-fBTKSitm2VbujeVfEZJA",
  authDomain: "book-haven-85345.firebaseapp.com",
  projectId: "book-haven-85345",
  storageBucket: "book-haven-85345.appspot.com",
  messagingSenderId: "227173075695",
  appId: "1:227173075695:web:8b23663e49223fb690691a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
