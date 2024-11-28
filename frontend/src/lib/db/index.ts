import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';

// Initialize Prisma
const prisma = new PrismaClient();

// Initialize Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase configuration');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Database helper functions
export const db = {
  // User operations
  users: {
    create: async (data: any) => {
      return prisma.user.create({ data });
    },
    findByEmail: async (email: string) => {
      return prisma.user.findUnique({ where: { email } });
    },
    update: async (id: string, data: any) => {
      return prisma.user.update({ where: { id }, data });
    }
  },

  // Expert operations
  experts: {
    create: async (data: any) => {
      return prisma.expertProfile.create({ data });
    },
    findById: async (id: string) => {
      return prisma.expertProfile.findUnique({ where: { id } });
    },
    update: async (id: string, data: any) => {
      return prisma.expertProfile.update({ where: { id }, data });
    }
  },

  // Course operations
  courses: {
    create: async (data: any) => {
      return prisma.course.create({ data });
    },
    findAll: async () => {
      return prisma.course.findMany();
    },
    findById: async (id: string) => {
      return prisma.course.findUnique({ where: { id } });
    }
  },

  // Mission operations
  missions: {
    create: async (data: any) => {
      return prisma.mission.create({ data });
    },
    findAll: async () => {
      return prisma.mission.findMany();
    },
    findById: async (id: string) => {
      return prisma.mission.findUnique({ where: { id } });
    }
  }
};

// File storage operations
export const storage = {
  upload: async (bucket: string, path: string, file: File) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);
    
    if (error) throw error;
    return data;
  },

  download: async (bucket: string, path: string) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .download(path);
    
    if (error) throw error;
    return data;
  },

  getPublicUrl: (bucket: string, path: string) => {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);
    
    return data.publicUrl;
  }
};