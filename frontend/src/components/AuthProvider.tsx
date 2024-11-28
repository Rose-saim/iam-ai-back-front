import React, { useState, useEffect } from 'react';
import { AuthContext } from '../lib/auth';
import { RegisterFormData, LoginFormData, User } from '../lib/auth/types';
import * as authService from '../lib/auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Vérification de la session existante au chargement
    const token = localStorage.getItem('sessionToken');
    if (token) {
      authService.validateSession(token).then((userData) => {
        if (userData) {
          setUser(userData); // Met à jour le contexte utilisateur
        } else {
          localStorage.removeItem('sessionToken'); // Supprime un token invalide
        }
      });
    }
  }, []);

  const register = async (data: RegisterFormData) => {
    const newUser = await authService.register(data);
    const token = await authService.createSession(newUser.id);
    localStorage.setItem('sessionToken', token);
    setUser(newUser); // Met à jour le contexte utilisateur
  };

  const login = async (data: LoginFormData) => {
    const userData = await authService.login(data);
    const token = await authService.createSession(userData.id);
    localStorage.setItem('sessionToken', token);
    setUser(userData); // Met à jour le contexte utilisateur
  };

  const logout = () => {
    localStorage.removeItem('sessionToken');
    setUser(null); // Réinitialise le contexte utilisateur
  };

  const updateUserRole = async (role: 'B2B' | 'B2C' | 'expert') => {
    if (!user) return;

    const updatedUser = await authService.updateUserRole(user.id, role);
    setUser(updatedUser); // Met à jour le contexte utilisateur avec le nouveau rôle
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, register, login, logout, updateUserRole }}
    >
      {children}
    </AuthContext.Provider>
  );
}
