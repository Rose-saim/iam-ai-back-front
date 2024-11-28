import React from 'react';
import { motion } from 'framer-motion';

interface dashboardLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function dashboardLayout({ title, subtitle, children }: dashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="mt-2 text-gray-600">{subtitle}</p>
          </div>
          {children}
        </motion.div>
      </div>
    </div>
  );
}