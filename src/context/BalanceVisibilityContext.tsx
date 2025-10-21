"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type BalanceVisibilityContextType = {
  showBalance: boolean;
  toggleBalance: () => void;
};

const BalanceVisibilityContext = createContext<BalanceVisibilityContextType | undefined>(undefined);

export function BalanceVisibilityProvider({ children }: { children: ReactNode }) {
  const [showBalance, setShowBalance] = useState(true);
  const toggleBalance = () => setShowBalance((prev) => !prev);

  return (
    <BalanceVisibilityContext.Provider value={{ showBalance, toggleBalance }}>
      {children}
    </BalanceVisibilityContext.Provider>
  );
}

export function useBalanceVisibility() {
  const context = useContext(BalanceVisibilityContext);
  if (!context) {
    throw new Error("useBalanceVisibility must be used inside BalanceVisibilityProvider");
  }
  return context;
}
