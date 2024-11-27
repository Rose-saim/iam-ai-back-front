import React, { useState, useEffect } from 'react';
import { AuthContext } from '../lib/auth';
import { RegisterFormData, LoginFormData } from '../lib/types';
import * as authService from '../lib/auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for existing session token
    const token = localStorage.getItem('sessionToken');
    if (token) {
      authService.validateSession(token).then(user => {
        if (user) {
          setUser(user);
        } else {
          localStorage.removeItem('sessionToken');
        }
      });
    }
  }, []);

  const register = async (data: RegisterFormData) => {
    const newUser = await authService.register(data);
    const token = await authService.createSession(newUser.id);
    localStorage.setItem('sessionToken', token);
    setUser(newUser);
  };

  const login = async (data: LoginFormData) => {
    const user = await authService.login(data);
    const token = await authService.createSession(user.id);
    localStorage.setItem('sessionToken', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('sessionToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}