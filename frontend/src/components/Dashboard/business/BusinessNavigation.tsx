import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Users, BookOpen, Target, BarChart2, Calendar,
  MessageSquare, Calculator, Brain, Settings
} from 'lucide-react';

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Consultants', path: '/dashboard/consultants' },
  { icon: Target, label: 'Missions', path: '/dashboard/missions' },
  { icon: BookOpen, label: 'Courses', path: '/dashboard/courses' },
  { icon: BarChart2, label: 'Performance', path: '/dashboard/performance' },
  { icon: Calendar, label: 'Implementation', path: '/dashboard/implementation' },
  { icon: MessageSquare, label: 'Support', path: '/dashboard/support' },
  { icon: Calculator, label: 'Calculator', path: '/dashboard/calculator' },
  { icon: Brain, label: 'Intelligence', path: '/dashboard/intelligence' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' }
];

export default function BusinessNavigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 ${
                location.pathname === item.path
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}