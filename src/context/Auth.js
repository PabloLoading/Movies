import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsuscribe;
  }, []);

  const login = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logout = () => {
    auth.signOut();
  };

  const inValue = {
    currentUser,
    logout,
    login,
  };
  return (
    <AuthContext.Provider value={inValue}>{children}</AuthContext.Provider>
  );
};

export default useAuth;
