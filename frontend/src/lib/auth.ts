import { createContext, useContext } from 'react';
import bcryptjs from 'bcryptjs';
import { storage } from './storage';
import type { RegisterFormData, LoginFormData, AuthContextType } from '../lib/auth/types';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export const validateSession = async (token: string) => {
  const session = storage.findSessionByToken(token);
  if (!session) return null;

  const user = storage.findUserById(session.userId);
  if (!user) return null;

  const { passwordHash, ...userData } = user;
  return userData;
};

export const createSession = async (userId: string) => {
  const session = storage.createSession(userId);
  return session.token;
};

export const register = async (data: RegisterFormData) => {
  const existingUser = storage.findUserByEmail(data.email);
  if (existingUser) {
    throw new Error('Email already registered');
  }

  const passwordHash = await bcryptjs.hash(data.password, 10);
  const now = new Date().toISOString();
  
  const newUser = {
    id: crypto.randomUUID(),
    email: data.email,
    accountType: data.accountType,
    passwordHash,
    fullName: data.accountType === 'B2C' ? data.fullName : undefined,
    companyName: data.accountType === 'B2B' ? data.companyName : undefined,
    industry: data.accountType === 'B2B' ? data.industry : undefined,
    fieldOfInterest: data.accountType === 'B2C' ? data.fieldOfInterest : undefined,
    createdAt: now,
    updatedAt: now
  };

  storage.saveUser(newUser);
  const { passwordHash: _, ...user } = newUser;
  return user;
};

export const login = async (data: LoginFormData) => {
  const storedUser = storage.findUserByEmail(data.email);
  if (!storedUser) {
    throw new Error('Invalid email or password');
  }

  const isValid = await bcryptjs.compare(data.password, storedUser.passwordHash);
  if (!isValid) {
    throw new Error('Invalid email or password');
  }

  const { passwordHash: _, ...user } = storedUser;
  return user;
};

export { AuthContext };