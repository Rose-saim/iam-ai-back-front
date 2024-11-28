import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AppleCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  image?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function AppleCard({
  title,
  description,
  icon: Icon,
  image,
  children,
  onClick
}: AppleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {Icon && (
          <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-gray-900" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-500 mb-4">{description}</p>
        )}
        {children}
      </div>
    </motion.div>
  );
}