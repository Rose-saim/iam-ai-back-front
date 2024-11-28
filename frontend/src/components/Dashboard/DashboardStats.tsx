import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  description: string;
}

interface DashboardStatsProps {
  stats: Stat[];
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-500">{stat.title}</h3>
            {stat.icon}
          </div>
          <div className="flex items-baseline">
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="ml-2 text-sm font-medium text-green-600">{stat.change}</p>
          </div>
          <p className="text-sm text-gray-600 mt-1">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
}