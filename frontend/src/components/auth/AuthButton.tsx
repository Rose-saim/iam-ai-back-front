import React from 'react';

interface AuthButtonProps {
  type?: 'submit' | 'button';
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function AuthButton({ 
  type = 'submit', 
  onClick, 
  children,
  variant = 'primary'
}: AuthButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3.5 px-6 rounded-xl font-medium transition-all duration-200 ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg hover:from-blue-600 hover:to-indigo-600'
          : 'bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
}