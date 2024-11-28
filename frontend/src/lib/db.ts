import { Database } from 'sqlite3';
import { open } from 'sqlite';

let db: any = null;

export async function getDb() {
  if (!db) {
    db = await open({
      filename: ':memory:', // Use in-memory database for development
      driver: Database
    });

    // Create tables
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        accountType TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        passwordHash TEXT NOT NULL,
        fullName TEXT,
        companyName TEXT,
        orgName TEXT,
        industry TEXT,
        fieldOfInterest TEXT,
        role TEXT,
        department TEXT,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS profiles (
        id TEXT PRIMARY KEY,
        userId TEXT UNIQUE NOT NULL,
        avatar TEXT,
        bio TEXT,
        preferences TEXT,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        userId TEXT NOT NULL,
        token TEXT UNIQUE NOT NULL,
        expiresAt TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id)
      );
    `);
  }

  return db;
}