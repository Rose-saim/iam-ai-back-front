import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../storage';
import type { RegisterFormData, LoginFormData, User } from './types';
import { createSession } from './utils';

// Default admin credentials
const DEFAULT_ADMIN = {
  id: 'admin-001',
  email: 'admin@iamai.com',
  password: 'Admin123!',
  accountType: 'admin',
  isAdmin: true,
  fullName: 'System Administrator'
};

// Initialize admin account if it doesn't exist
const initializeAdmin = async () => {
  const existingAdmin = storage.findUserByEmail(DEFAULT_ADMIN.email);
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(DEFAULT_ADMIN.password, 10);
    const now = new Date().toISOString();
    storage.saveUser({
      ...DEFAULT_ADMIN,
      passwordHash,
      createdAt: now,
      updatedAt: now
    });
  }
};

// Call initialization
initializeAdmin();

export async function register(data: RegisterFormData) {
  const existingUser = storage.findUserByEmail(data.email);
  if (existingUser) {
    throw new Error('Email already registered');
  }

  const passwordHash = await bcrypt.hash(data.password, 10);
  const now = new Date().toISOString();
  
  const newUser = {
    id: uuidv4(),
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
  const token = await createSession(user.id);

  return { user, token };
}

export async function login(data: LoginFormData) {
  const storedUser = storage.findUserByEmail(data.email);
  if (!storedUser) {
    throw new Error('Invalid email or password');
  }

  const isValid = await bcrypt.compare(data.password, storedUser.passwordHash);
  if (!isValid) {
    throw new Error('Invalid email or password');
  }

  const { passwordHash: _, ...user } = storedUser;
  const token = await createSession(user.id);

  return { user, token };
}

export async function signInWithProvider(provider: 'google' | 'github') {
  // Simulated OAuth sign-in
  const mockUser: User = {
    id: uuidv4(),
    email: 'test@example.com',
    accountType: 'B2C',
    fullName: 'Test User',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const token = await createSession(mockUser.id);
  return { user: mockUser, token };
}