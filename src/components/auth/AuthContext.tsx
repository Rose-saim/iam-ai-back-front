import React, { createContext, useContext } from 'react';
import type { User } from '../lib/types';

interface AuthContextType {
  user: User | null;
  signIn: (provider: 'google' | 'github') => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
  error: Error | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const signIn = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulated OAuth sign-in
      const mockUser = {
        name: 'Test User',
        email: 'test@example.com',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
      };
      setUser(mockUser);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      setUser(null);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};