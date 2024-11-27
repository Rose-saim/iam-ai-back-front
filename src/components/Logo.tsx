import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-10',
    large: 'h-12'
  };

  return (
    <div className="flex items-center">
      <img
        src="/images/logo.jpg"
        alt="I AM AI"
        className={`${sizeClasses[size]} rounded-lg`}
      />
    </div>
  );
}