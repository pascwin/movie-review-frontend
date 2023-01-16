import React, { createContext, useState } from "react";
import { signInUser } from "../api/auth";

export const AuthContext = createContext();

const defaultAuthInfo = {
  profile: null,
  isLoggedIn: false,
  isPending: false,
  error: "",
};

export const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({ ...defaultAuthInfo });

  const handleLogin = async (email, password) => {
    setAuthInfo({ ...authInfo, isPending: true });
    const { error, user } = await signInUser({ email, password });
    if (error) {
      setAuthInfo({ ...authInfo, istPending: false });
    }
    setAuthInfo({
      profile: { ...user },
      isPending: false,
      error: "",
      isLoggedIn: true,
    });
    // we will use this auth token to fetch our user from the backend api
    localStorage.setItem("auth-token", user.token);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  const isAuth = () => {
    return authInfo.isLoggedIn;
  };

  return (
    <AuthContext.Provider
      value={{ authInfo, handleLogin, handleLogout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
