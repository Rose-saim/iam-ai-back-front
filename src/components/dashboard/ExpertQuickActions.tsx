import React from 'react';
import { BookOpen, Upload, Users, BarChart2 } from 'lucide-react';
import QuickAction from './QuickAction';

export default function ExpertQuickActions() {
  const actions = [
    {
      icon: Upload,
      title: 'Upload Content',
      description: 'Add new course materials',
      link: '/instructor/content-upload'
    },
    {
      icon: Users,
      title: 'Student Management',
      description: 'View and manage students',
      link: '/instructor/students'
    },
    {
      icon: BookOpen,
      title: 'Course Analytics',
      description: 'View course performance',
      link: '/instructor/analytics'
    },
    {
      icon: BarChart2,
      title: 'Revenue Reports',
      description: 'Track your earnings',
      link: '/instructor/revenue'
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