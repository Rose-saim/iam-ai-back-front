import React from 'react';
import { motion } from 'framer-motion';

interface AppleHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: string;
  children?: React.ReactNode;
  theme?: 'light' | 'dark';
}

export default function AppleHero({
  title,
  subtitle,
  image,
  height = 'h-screen',
  children,
  theme = 'light'
}: AppleHeroProps) {
  return (
    <div className={`relative ${height} overflow-hidden`}>
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </motion.div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`text-5xl md:text-7xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`text-xl md:text-2xl max-w-3xl ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-200'
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}