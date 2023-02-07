import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getIsAuth, signInUser } from "../api/auth";
import { useNotification } from "../hooks";

export const AuthContext = createContext();

const defaultAuthInfo = {
  profile: null,
  isLoggedIn: false,
  isPending: false,
  error: "",
};

export const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({ ...defaultAuthInfo });
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const { updateNotification } = useNotification();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    setAuthInfo({ ...authInfo, isPending: true });
    const { error, user } = await signInUser({ email, password });
    if (error) {
      updateNotification("error", error);
      return setAuthInfo({ ...authInfo, istPending: false, error });
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
    localStorage.removeItem("auth-token");
    setAuthInfo({ ...defaultAuthInfo });
    setAlreadyLoggedIn(false)
  };

  const isAuth = useCallback(async () => {
    const token = localStorage.getItem("auth-token");
    if (!token) return;
    const { error, user } = await getIsAuth(token);

    if (error) {
      updateNotification("error", error);
      return setAuthInfo((a) => ({ ...a, istPending: false, error }));
    }
    if (!alreadyLoggedIn) {
      setAlreadyLoggedIn(true);
      navigate("/", { replace: true });
    }

    setAuthInfo({
      profile: { ...user },
      isLoggedIn: true,
      isPending: false,
      error: "",
    });
  }, [updateNotification, alreadyLoggedIn, navigate]);

  useEffect(() => {
    isAuth();
  }, [isAuth, authInfo.isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ authInfo, handleLogin, handleLogout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
