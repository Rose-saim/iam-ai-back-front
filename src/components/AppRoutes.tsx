import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import GetStarted from '../pages/GetStarted';
import RegisterBusiness from '../pages/auth/RegisterBusiness';
import RegisterIndividual from '../pages/auth/RegisterIndividual';
import RegisterPublicService from '../pages/auth/RegisterPublicService';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/Dashboard';
import Services from '../pages/Services';
import Resources from '../pages/Resources';
import About from '../pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/register-business" element={<RegisterBusiness />} />
      <Route path="/register-individual" element={<RegisterIndividual />} />
      <Route path="/register-public-service" element={<RegisterPublicService />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;