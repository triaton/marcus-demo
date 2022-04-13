import React, { useState } from 'react';
import { LOCAL_STORAGE_AUTH_TOKEN } from './consts';

export const AuthContext = React.createContext({ authToken: '', saveAuth: (token: string) => {} });

const AuthContextProvider: React.FC = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN) || '');
  const saveAuth = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token);
    setAuthToken(token);
  }
  return <AuthContext.Provider value={{ authToken, saveAuth }}>{children}</AuthContext.Provider>;
}

const Providers: React.FC = ({ children }) => {
  return <AuthContextProvider>
    {children}
  </AuthContextProvider>
}

export default Providers;
