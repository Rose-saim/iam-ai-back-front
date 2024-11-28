import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Database configuration for production
export const dbConfig = {
  development: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: false
  },
  production: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
};