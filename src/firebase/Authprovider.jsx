import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';

export const AuthContext = createContext(null);
const googleprovider = new GoogleAuthProvider()
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new user with email and password
  const creatuser = (email, password) => {
    setLoading(true);  // Set loading to true when starting the signup process
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in an existing user with email and password
  const signinuser = (email, password) => {
    setLoading(true);  // Set loading to true when starting the sign-in process
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log out the user
  const logout = () => {
    setLoading(true);  // Set loading to true during log out
    return signOut(auth);
  };
const signinwithgoogle = () =>{
    return signInWithPopup(auth,googleprovider)
}
  const userinfo = {
    user,
    loading,
    creatuser,
    signinuser,
    logout,
    signinwithgoogle
  };

  useEffect(() => {
    // This listens for changes in authentication state (e.g., sign-in or sign-out)
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false); // Set loading to false when user info is updated
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={userinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
