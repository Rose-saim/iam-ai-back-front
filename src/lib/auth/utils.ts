import { storage } from '../storage';
import type { User } from './types';

export async function validateSession(token: string): Promise<User | null> {
  const session = storage.findSessionByToken(token);
  if (!session) return null;

  const user = storage.findUserById(session.userId);
  if (!user) return null;

  const { passwordHash, ...userData } = user;
  return userData;
}

export async function createSession(userId: string): Promise<string> {
  const session = storage.createSession(userId);
  return session.token;
}