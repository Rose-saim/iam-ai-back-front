import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AppleButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export default function AppleButton({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false
}: AppleButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center rounded-full font-medium
    transition-all duration-300
    ${fullWidth ? 'w-full' : ''}
    ${size === 'small' ? 'px-4 py-2 text-sm' : 
      size === 'medium' ? 'px-6 py-3 text-base' : 
      'px-8 py-4 text-lg'}
    ${variant === 'primary' ? 
      'bg-gray-900 text-white hover:bg-gray-800' : 
      'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'}
  `;

  const Component = motion(to ? Link : 'button');
  const props = to ? { to } : { onClick };

  return (
    <Component
      {...props}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseStyles}
    >
      {children}
    </Component>
  );
}