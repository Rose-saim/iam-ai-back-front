import React from 'react';
import { BookOpen, Users, Settings, BarChart2 } from 'lucide-react';
import QuickAction from './QuickAction';

export default function BusinessQuickActions() {
  const actions = [
    {
      icon: BookOpen,
      title: 'Training Progress',
      description: 'Continue your AI implementation training',
      link: '/dashboard/training'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Manage team access and roles',
      link: '/dashboard/team'
    },
    {
      icon: Settings,
      title: 'AI Tools Setup',
      description: 'Configure and manage AI tools',
      link: '/dashboard/tools'
    },
    {
      icon: BarChart2,
      title: 'Performance Metrics',
      description: 'View implementation analytics',
      link: '/dashboard/metrics'
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