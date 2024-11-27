import React from 'react';
import { useAuth } from '../lib/auth/context';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import BusinessDashboard from '../components/dashboard/BusinessDashboard';
import IndividualDashboard from '../components/dashboard/IndividualDashboard';
import ExpertDashboard from '../components/dashboard/ExpertDashboard';

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
      case 'B2G':
        return <PublicServiceDashboard />;
      case 'expert':
        return <ExpertDashboard />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    if (user.isAdmin) {
      return 'Admin Dashboard';
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
    <DashboardLayout
      title={getTitle()}
      subtitle={getSubtitle()}
    >
      {getDashboardContent()}
    </DashboardLayout>
  );
}