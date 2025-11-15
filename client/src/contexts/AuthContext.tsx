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
  const { data: auth, isLoading, isFetching, error } = useQuery<AuthResponse>({
    queryKey: ['/api/check-auth'],
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: true,
    retry: false,
  });

  let status: AuthStatus;
  if (isLoading || isFetching) {
    status = 'loading';
  } else if (error) {
    status = 'error';
  } else if (auth?.authenticated) {
    status = 'authenticated';
  } else {
    status = 'unauthenticated';
  }

  const value: AuthContextValue = {
    auth,
    status,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
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
