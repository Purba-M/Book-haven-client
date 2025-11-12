import React, { createContext, useEffect, useState } from "react";

export const Authcontext= createContext();
import { GoogleAuthProvider } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase.config";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user, loading);

  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  // UPDATEUSER
  const updateuser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);


  const authdata = {
    user,
    setuser,
    createuser,
    logout,
    signin,
    loading,
    setLoading,
    updateuser,
    googleSignIn 
  };

  return (
    <Authcontext.Provider value={authdata}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;