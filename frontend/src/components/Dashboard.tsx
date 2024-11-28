import React, { useEffect, useState } from 'react';
import { useAuth } from '../lib/auth/context';
import BusinessDashboard from './dashboard/BusinessDashboard';
import IndividualDashboard from './dashboard/IndividualDashboard';
import ExpertDashboard from './dashboard/ExpertDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
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
          <button onClick={() => setSelectedType('B2B')}>Business Dashboard (B2B)</button>
          <button onClick={() => setSelectedType('B2C')}>Individual Dashboard (B2C)</button>
          <button onClick={() => setSelectedType('expert')}>Expert Dashboard</button>
        </div>
      );
    }
  const getDashboardContent = () => {
    const accountType = user.accountType || selectedType;

    if (user.isAdmin) {
      return <AdminDashboard />;
    }

    switch (accountType) {
      case 'B2B':
        return <BusinessDashboard />;
      case 'B2C':
        return <IndividualDashboard />;
      case 'expert':
        return <ExpertDashboard />;
      default:
        return <div>Error: Invalid account type</div>;
    }
  };
  
  return (
    <div>
      {getDashboardContent()}
    </div>
  );
};
export default Dashboard;
