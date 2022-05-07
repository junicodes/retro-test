import React from "react";
import { createContext, useContext } from "react";
import { AppProvider } from "./AppContext";

export const CombineContext = createContext();

export default function CombineContextProvider({ children }) {
  return (
    <AppProvider>
        {children}
    </AppProvider>
  );
}

export function useCombineContext() {
  return useContext(CombineContext);
}