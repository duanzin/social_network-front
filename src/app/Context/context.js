"use client";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({
  token: "",
  setToken: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      const parsedToken = JSON.parse(savedToken);
      if (parsedToken && parsedToken.exp > Date.now()) {
        setToken(parsedToken.token);
      } else {
        localStorage.removeItem("token");
      }
    }
  }, []);

  const handleSetToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem(
      "token",
      JSON.stringify({ token: newToken, exp: calculateExpirationTime() })
    );
  };

  const calculateExpirationTime = () => {
    const expirationTimeInMilliseconds = 30 * 60 * 1000;
    return Date.now() + expirationTimeInMilliseconds;
  };

  return (
    <GlobalContext.Provider value={{ token, setToken: handleSetToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
