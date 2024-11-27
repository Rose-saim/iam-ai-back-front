import React from 'react';
import { Users, BookOpen, BarChart2, Shield } from 'lucide-react';
import QuickAction from './QuickAction';

export default function AdminQuickActions() {
  const actions = [
    {
      icon: Users,
      title: 'Manage Users',
      description: 'View and manage user accounts',
      link: '/admin/users'
    },
    {
      icon: BookOpen,
      title: 'Course Management',
      description: 'Update and monitor courses',
      link: '/admin/courses'
    },
    {
      icon: BarChart2,
      title: 'Analytics',
      description: 'View platform statistics',
      link: '/admin/analytics'
    },
    {
      icon: Shield,
      title: 'Security Settings',
      description: 'Manage platform security',
      link: '/admin/security'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <QuickAction key={index} {...action} />
      ))}
    </div>
  );
}