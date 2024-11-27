import React from 'react';
import { motion } from 'framer-motion';

interface AuthCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function AuthCard({ title, subtitle, icon, children }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <div className="max-w-[980px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              {icon}
            </div>
          </div>
          <h1 className="text-[40px] leading-tight font-semibold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-500">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[580px] mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}