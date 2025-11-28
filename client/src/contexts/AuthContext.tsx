import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

interface AuthResponse {
  authenticated: boolean;
  username?: string;
  login_time?: string;
}

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated' | 'error';

interface AuthContextValue {
  auth: AuthResponse | undefined;
  status: AuthStatus;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // For static deployment, auto-authenticate
  const auth: AuthResponse = { authenticated: true, username: 'Guest' };
  const status: AuthStatus = 'authenticated';

  const value: AuthContextValue = {
    auth,
    status,
    isAuthenticated: true,
    isLoading: false,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
