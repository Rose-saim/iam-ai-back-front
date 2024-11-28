// API Routes configuration
export const API_ROUTES = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },

  // Expert
  EXPERT: {
    PROFILE: '/expert/profile',
    MISSIONS: '/expert/missions',
    TRAININGS: '/expert/trainings',
    CALENDAR: '/expert/calendar',
    ANALYTICS: '/expert/analytics',
    EARNINGS: '/expert/earnings',
  },

  // Messaging
  MESSAGES: {
    LIST: '/messages',
    SEND: '/messages/send',
    READ: '/messages/read',
  },

  // Courses
  COURSES: {
    LIST: '/courses',
    CREATE: '/courses/create',
    UPDATE: '/courses/update',
    DELETE: '/courses/delete',
    MATERIALS: '/courses/materials',
  },

  // Missions
  MISSIONS: {
    LIST: '/missions',
    CREATE: '/missions/create',
    UPDATE: '/missions/update',
    DELETE: '/missions/delete',
    DELIVERABLES: '/missions/deliverables',
  },

  // Files
  FILES: {
    UPLOAD: '/files/upload',
    DOWNLOAD: '/files/download',
  },

  // Analytics
  ANALYTICS: {
    DASHBOARD: '/analytics/dashboard',
    REPORTS: '/analytics/reports',
    EXPORT: '/analytics/export',
  },

  // Payments
  PAYMENTS: {
    LIST: '/payments',
    CREATE: '/payments/create',
    VERIFY: '/payments/verify',
  },
};