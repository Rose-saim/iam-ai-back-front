import React, { createContext, useContext, useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
import { storage } from './storage';
import type { RegisterFormData, LoginFormData } from './types';

interface User {
  id: string;
  email: string;
  accountType: 'B2B' | 'B2C' | 'B2G';
  fullName?: string;
  companyName?: string;
  orgName?: string;
  industry?: string;
  fieldOfInterest?: string;
  role?: string;
  department?: string;
}

interface AuthContextType {
  user: User | null;
  register: (data: RegisterFormData) => Promise<void>;
  login: (data: LoginFormData) => Promise<void>;
  logout: () => void;
  signIn: (provider: 'google' | 'github') => Promise<void>;
  isLoading: boolean;
  error: Error | null;
}

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

  const register = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const newUser = await registerUser(data);
      const token = await createSession(newUser.id);
      localStorage.setItem('sessionToken', token);
      setUser(newUser);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Registration failed'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await loginUser(data);
      const token = await createSession(user.id);
      localStorage.setItem('sessionToken', token);
      setUser(user);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Login failed'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    const token = localStorage.getItem('sessionToken');
    if (token) {
      storage.removeSession(token);
    }
    localStorage.removeItem('sessionToken');
    setUser(null);
  };

  const signIn = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulated OAuth sign-in
      const mockUser = {
        id: crypto.randomUUID(),
        email: 'test@example.com',
        accountType: 'B2C' as const,
        fullName: 'Test User',
      };
      setUser(mockUser);
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
      register, 
      login, 
      logout, 
      signIn,
      isLoading,
      error 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

// Auth utility functions
async function validateSession(token: string): Promise<User | null> {
  const session = storage.findSessionByToken(token);
  if (!session) return null;

  const user = storage.findUserById(session.userId);
  if (!user) return null;

  const { passwordHash, ...userData } = user;
  return userData;
}

async function createSession(userId: string): Promise<string> {
  const session = storage.createSession(userId);
  return session.token;
}

async function registerUser(data: RegisterFormData): Promise<User> {
  const existingUser = storage.findUserByEmail(data.email);
  if (existingUser) {
    throw new Error('Email already registered');
  }

  const passwordHash = await bcrypt.hash(data.password, 10);
  const now = new Date().toISOString();
  
  const newUser = {
    id: crypto.randomUUID(),
    email: data.email,
    accountType: data.accountType,
    passwordHash,
    fullName: data.accountType === 'B2C' ? data.fullName : undefined,
    companyName: data.accountType === 'B2B' ? data.companyName : undefined,
    orgName: data.accountType === 'B2G' ? data.organizationName : undefined,
    industry: data.accountType === 'B2B' ? data.industry : undefined,
    fieldOfInterest: data.accountType === 'B2C' ? data.fieldOfInterest : undefined,
    role: data.accountType === 'B2G' ? data.role : undefined,
    department: data.accountType === 'B2G' ? data.department : undefined,
    createdAt: now,
    updatedAt: now
  };

  storage.saveUser(newUser);
  const { passwordHash: _, ...user } = newUser;
  return user;
}

async function loginUser(data: LoginFormData): Promise<User> {
  const storedUser = storage.findUserByEmail(data.email);
  if (!storedUser) {
    throw new Error('Invalid email or password');
  }

  const isValid = await bcrypt.compare(data.password, storedUser.passwordHash);
  if (!isValid) {
    throw new Error('Invalid email or password');
  }

  const { passwordHash: _, ...user } = storedUser;
  return user;
}