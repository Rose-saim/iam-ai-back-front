import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User } from '../lib/auth/types';

interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Fonction pour récupérer les données utilisateur
  const fetchUser = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) return;

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/verify-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data.user;

      if (!userData) {
        throw new Error('Utilisateur non trouvé');
      }

      setUser(userData);

      // Redirection dynamique en fonction du rôle
      switch (userData.role) {
        case 'B2B':
          navigate('/dashboard/business');
          break;
        case 'B2C':
          navigate('/dashboard/individual');
          break;
        case 'expert':
          navigate('/dashboard/expert');
          break;
        default:
          console.warn('Aucun rôle défini, redirection vers la sélection du type de compte.');
          navigate('/select-account-type');
      }
    } catch (error: any) {
      console.error('Erreur lors de la récupération des données utilisateur :', error);
      if (error.response?.status === 401) {
        alert('Session expirée, veuillez vous reconnecter.');
      }
      setUser(null);
      localStorage.removeItem('authToken');
      navigate('/login');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte utilisateur
export const useAuth = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un UserProvider');
  }
  return context;
};

