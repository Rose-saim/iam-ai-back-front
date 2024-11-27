import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AuthContextType, User } from './types';
import { validateSession } from './utils';
import { register, login, signInWithProvider } from './service';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('sessionToken');
    if (token) {
      validateSession(token).then(user => {
        if (user) {
          setUser(user);
        } else {
          localStorage.removeItem('sessionToken');
        }
      });
    }
  }, []);

  const handleRegister: AuthContextType['register'] = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const { user, token } = await register(data);
      localStorage.setItem('sessionToken', token);
      setUser(user);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Registration failed'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin: AuthContextType['login'] = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const { user, token } = await login(data);
      localStorage.setItem('sessionToken', token);
      setUser(user);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Login failed'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('sessionToken');
    setUser(null);
  };

  const handleSignIn: AuthContextType['signIn'] = async (provider) => {
    setIsLoading(true);
    setError(null);
    try {
      const { user, token } = await signInWithProvider(provider);
      localStorage.setItem('sessionToken', token);
      setUser(user);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('OAuth sign-in failed'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      register: handleRegister,
      login: handleLogin,
      logout: handleLogout,
      signIn: handleSignIn,
      isLoading,
      error
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}