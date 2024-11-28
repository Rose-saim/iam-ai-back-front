import React from 'react';
import { useAuth } from '../lib/auth/context';
import dashboardLayout from '../components/dashboard/dashboardLayout';
import Admindashboard from '../pages/admin/Admindashboard';
import Businessdashboard from '../components/dashboard/Businessdashboard';
import Individualdashboard from '../components/dashboard/Individualdashboard';
import Expertdashboard from '../components/dashboard/Expertdashboard';

export default function dashboard() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const getdashboardContent = () => {
    if (user.isAdmin) {
      return <Admindashboard />;
    }

    switch (user.role) {
      case 'B2B':
        return <Businessdashboard />;
      case 'B2C':
        return <Individualdashboard />;
      case 'expert':
        return <Expertdashboard />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    if (user.isAdmin) {
      return 'Admin dashboard';
    }
    if (user.accountType === 'expert') {
      return `Welcome, ${user.fullName}`;
    }
    return `Welcome, ${user.fullName || user.companyName || user.orgName}`;
  };

  const getSubtitle = () => {
    if (user.isAdmin) {
      return 'Manage your platform and monitor key metrics';
    }
    if (user.accountType === 'expert') {
      return 'Manage your courses and track your performance';
    }
    return 'Here\'s an overview of your AI implementation progress';
  };

  return (
    <dashboardLayout
      title={getTitle()}
      subtitle={getSubtitle()}
    >
      {getdashboardContent()}
    </dashboardLayout>
  );
}