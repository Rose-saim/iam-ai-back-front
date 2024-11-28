import { api } from './config';

// API endpoints
export const endpoints = {
  auth: {
    login: (data: any) => api.post('/auth/login', data),
    register: (data: any) => api.post('/auth/register', data),
    logout: () => api.post('/auth/logout'),
    refreshToken: () => api.post('/auth/refresh')
  },

  experts: {
    getProfile: () => api.get('/experts/profile'),
    updateProfile: (data: any) => api.put('/experts/profile', data),
    getMissions: () => api.get('/experts/missions'),
    getTrainings: () => api.get('/experts/trainings'),
    createTraining: (data: any) => api.post('/experts/trainings', data),
    updateTraining: (id: string, data: any) => api.put(`/experts/trainings/${id}`, data)
  },

  missions: {
    create: (data: any) => api.post('/missions', data),
    update: (id: string, data: any) => api.put(`/missions/${id}`, data),
    delete: (id: string) => api.delete(`/missions/${id}`),
    uploadDeliverable: (id: string, file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      return api.post(`/missions/${id}/deliverables`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
  },

  courses: {
    create: (data: any) => api.post('/courses', data),
    update: (id: string, data: any) => api.put(`/courses/${id}`, data),
    delete: (id: string) => api.delete(`/courses/${id}`),
    uploadMaterial: (id: string, file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      return api.post(`/courses/${id}/materials`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
  },

  calendar: {
    getEvents: () => api.get('/calendar/events'),
    createEvent: (data: any) => api.post('/calendar/events', data),
    updateEvent: (id: string, data: any) => api.put(`/calendar/events/${id}`, data),
    deleteEvent: (id: string) => api.delete(`/calendar/events/${id}`)
  },

  analytics: {
    getDashboard: () => api.get('/analytics/dashboard'),
    getReports: () => api.get('/analytics/reports'),
    exportReport: (type: string) => api.get(`/analytics/export/${type}`, { responseType: 'blob' })
  }
};