import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  onClick: () => void;
}

export default function ActionCard({
  title,
  description,
  icon: Icon,
  buttonText,
  onClick
}: ActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <button
        onClick={onClick}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>
    </motion.div>
  );
}