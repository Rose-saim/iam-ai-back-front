export type AccountType = 'B2B' | 'B2C' | 'expert' | 'admin';

export interface User {
  id: string;
  email: string;
  accountType: AccountType;
  isAdmin?: boolean;
  fullName?: string;
  companyName?: string;
  industry?: string;
  fieldOfInterest?: string;
  expertise?: string[];
  yearsOfExperience?: number;
  certifications?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface StoredUser extends User {
  passwordHash: string;
}

export interface Session {
  id: string;
  userId: string;
  token: string;
  expiresAt: string;
  createdAt: string;
}

export interface RegisterFormData {
  accountType: AccountType;
  email: string;
  password: string;
  fullName?: string;
  companyName?: string;
  industry?: string;
  fieldOfInterest?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface AuthContextType {
  user: User | null;
  register: (data: RegisterFormData) => Promise<void>;
  login: (data: LoginFormData) => Promise<void>;
  logout: () => void;
  signIn: (provider: 'google' | 'github') => Promise<void>;
  isLoading: boolean;
  error: Error | null;
}