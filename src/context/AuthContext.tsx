import React, { createContext, useState, useEffect, useContext } from 'react';
import { User } from '../models/User';
import * as authService from '../services/authService';

interface AuthContextType {
  user: User | null;
  login: (username: string, passwordAttempt: string) => boolean;
  logout: () => void;
  register: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loggedInUser = authService.getLoggedInUser();
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const login = (username: string, passwordAttempt: string): boolean => {
    const loggedInUser = authService.loginUser(username, passwordAttempt);
    if (loggedInUser) {
      setUser(loggedInUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    authService.logoutUser();
    setUser(null);
  };

  const register = (user: User) => {
    authService.registerUser(user);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};