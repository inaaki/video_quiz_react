import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      //set loading after to fix unnecessary re-render of its children
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signup = (email, pass) => {
    return createUserWithEmailAndPassword(getAuth(), email, pass);
  };
  const login = (email, pass) =>
    signInWithEmailAndPassword(getAuth(), email, pass);
  const logout = () => signOut(getAuth());

  const value = {
    currentUser: user,
    signup,
    login,
    logout
  };

  console.log('AuthProvider render');

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
