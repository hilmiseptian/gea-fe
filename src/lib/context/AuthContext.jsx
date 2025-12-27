// src/contexts/AuthContext.js
import { createContext, useContext } from 'react';
import { useLocalStorage } from 'react-use';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useLocalStorage('token', '');

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
