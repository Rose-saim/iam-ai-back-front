import React from 'react';
import { BookOpen, Award, Target, Users } from 'lucide-react';
import QuickAction from './QuickAction';

export default function IndividualQuickActions() {
  const actions = [
    {
      icon: BookOpen,
      title: 'My Courses',
      description: 'Continue your learning journey',
      link: '/dashboard/courses'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'View and download certificates',
      link: '/dashboard/certifications'
    },
    {
      icon: Target,
      title: 'Learning Path',
      description: 'Track your progress',
      link: '/dashboard/progress'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other learners',
      link: '/dashboard/community'
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