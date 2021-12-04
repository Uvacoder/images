import { useState, useContext, createContext } from "react";

// types
interface AppContext {
  state?: any;
  setState?: any;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContext>({});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
