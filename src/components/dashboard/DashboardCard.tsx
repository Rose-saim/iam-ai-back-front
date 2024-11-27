import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  color?: string;
}

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  description,
  color = 'blue'
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-600">{title}</h3>
        <div className={`bg-${color}-100 p-2 rounded-lg text-${color}-600`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </motion.div>
  );
}