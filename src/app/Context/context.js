"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({ token: "" });

export const GlobalContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <GlobalContext.Provider value={{ token, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
