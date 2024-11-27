import { v4 as uuidv4 } from 'uuid';
import type { AccountType } from './types';

export interface User {
  id: string;
  email: string;
  accountType: AccountType;
  fullName?: string;
  companyName?: string;
  orgName?: string;
  industry?: string;
  fieldOfInterest?: string;
  role?: string;
  department?: string;
  createdAt: string;
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

const USERS_KEY = 'users';
const SESSIONS_KEY = 'sessions';

export const storage = {
  // User operations
  getUsers: (): StoredUser[] => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },

  saveUser: (user: StoredUser): void => {
    const users = storage.getUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  findUserByEmail: (email: string): StoredUser | undefined => {
    const users = storage.getUsers();
    return users.find(user => user.email === email);
  },

  findUserById: (id: string): StoredUser | undefined => {
    const users = storage.getUsers();
    return users.find(user => user.id === id);
  },

  // Session operations
  getSessions: (): Session[] => {
    const sessions = localStorage.getItem(SESSIONS_KEY);
    return sessions ? JSON.parse(sessions) : [];
  },

  createSession: (userId: string): Session => {
    const sessions = storage.getSessions();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

    const session: Session = {
      id: uuidv4(),
      userId,
      token: uuidv4(),
      expiresAt: expiresAt.toISOString(),
      createdAt: new Date().toISOString()
    };

    sessions.push(session);
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
    return session;
  },

  findSessionByToken: (token: string): Session | undefined => {
    const sessions = storage.getSessions();
    return sessions.find(session => 
      session.token === token && 
      new Date(session.expiresAt) > new Date()
    );
  },

  removeSession: (token: string): void => {
    const sessions = storage.getSessions();
    const filteredSessions = sessions.filter(session => session.token !== token);
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(filteredSessions));
  },

  // Utility functions
  clearAll: (): void => {
    localStorage.removeItem(USERS_KEY);
    localStorage.removeItem(SESSIONS_KEY);
  }
};