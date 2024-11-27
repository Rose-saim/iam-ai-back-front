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