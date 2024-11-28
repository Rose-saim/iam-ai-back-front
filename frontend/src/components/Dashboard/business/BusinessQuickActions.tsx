import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, BookOpen, Target, BarChart2, Calendar, 
  MessageSquare, Calculator, Brain 
} from 'lucide-react';

const quickActions = [
  {
    icon: Users,
    title: 'Consultants',
    description: 'Manage AI experts',
    link: '/dashboard/consultants'
  },
  {
    icon: BookOpen,
    title: 'Courses',
    description: 'View training catalog',
    link: '/dashboard/courses'
  },
  {
    icon: Target,
    title: 'Missions',
    description: 'Track implementation projects',
    link: '/dashboard/missions'
  },
  {
    icon: BarChart2,
    title: 'Performance',
    description: 'View KPIs and metrics',
    link: '/dashboard/performance'
  },
  {
    icon: Calendar,
    title: 'Planning',
    description: 'Implementation roadmap',
    link: '/dashboard/implementation'
  },
  {
    icon: MessageSquare,
    title: 'Support',
    description: 'Get assistance',
    link: '/dashboard/support'
  },
  {
    icon: Calculator,
    title: 'ROI Calculator',
    description: 'Measure impact',
    link: '/dashboard/calculator'
  },
  {
    icon: Brain,
    title: 'AI Intelligence',
    description: 'Market insights',
    link: '/dashboard/intelligence'
  }
];

export default function BusinessQuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {quickActions.map((action, index) => (
        <Link
          key={index}
          to={action.link}
          className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex flex-col items-center text-center">
            <action.icon className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
            <p className="text-sm text-gray-500">{action.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}