import React, { useEffect, useState } from 'react';
import { useAuth } from '../lib/auth/context';
import Businessdashboard from './dashboard/Businessdashboard';
import Individualdashboard from './dashboard/Individualdashboard';
import Expertdashboard from './dashboard/Expertdashboard';
import Admindashboard from '../pages/admin/Admindashboard';
import { useNavigate } from 'react-router-dom';

const dashboard = () => {
  const { user } = useAuth();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!user)
      navigate('/login');
  }, [user, navigate]);

  if (!user)
    return <div>Loading...</div>
  
    // Si le type de tableau de bord n'est pas défini
    if (!user.accountType && !selectedType) {
      return (
        <div className="dashboard-selection">
          <h2>Select your dashboard type</h2>
          <button onClick={() => setSelectedType('B2B')}>Business dashboard (B2B)</button>
          <button onClick={() => setSelectedType('B2C')}>Individual dashboard (B2C)</button>
          <button onClick={() => setSelectedType('expert')}>Expert dashboard</button>
        </div>
      );
    }
  const getdashboardContent = () => {
    const accountType = user.accountType || selectedType;

    if (user.isAdmin) {
      return <Admindashboard />;
    }

    switch (accountType) {
      case 'B2B':
        return <Businessdashboard />;
      case 'B2C':
        return <Individualdashboard />;
      case 'expert':
        return <Expertdashboard />;
      default:
        return <div>Error: Invalid account type</div>;
    }
  };
  
  return (
    <div>
      {getdashboardContent()}
    </div>
  );
};
export default dashboard;
