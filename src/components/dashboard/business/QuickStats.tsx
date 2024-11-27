import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Briefcase, TrendingUp } from 'lucide-react';

interface QuickStatsProps {
  stats: {
    employees: number;
    consultants: number;
    courses: number;
    missions: number;
  };
}

export default function QuickStats({ stats }: QuickStatsProps) {
  const statItems = [
    {
      title: 'Total Employees',
      value: stats.employees,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Consultants',
      value: stats.consultants,
      icon: Briefcase,
      color: 'green'
    },
    {
      title: 'Completed Courses',
      value: stats.courses,
      icon: BookOpen,
      color: 'purple'
    },
    {
      title: 'Active Missions',
      value: stats.missions,
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-500">{item.title}</h3>
            <item.icon className={`w-5 h-5 text-${item.color}-600`} />
          </div>
          <p className="text-2xl font-bold">{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
}