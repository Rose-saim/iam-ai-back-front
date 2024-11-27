import React from 'react';
import { useAuth } from '../lib/auth/context';
import BusinessDashboard from './dashboard/BusinessDashboard';
import IndividualDashboard from './dashboard/IndividualDashboard';
import ExpertDashboard from './dashboard/ExpertDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const getDashboardContent = () => {
    if (user.isAdmin) {
      return <AdminDashboard />;
    }

    switch (user.accountType) {
      case 'B2B':
        return <BusinessDashboard />;
      case 'B2C':
        return <IndividualDashboard />;
      case 'expert':
        return <ExpertDashboard />;
      default:
        return null;
    }
  };

  return getDashboardContent();
}