import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AuthInputProps {
  type: string;
  name: string;
  placeholder: string;
  icon: LucideIcon;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function AuthInput({
  type,
  name,
  placeholder,
  icon: Icon,
  required = true,
  value,
  onChange,
  error
}: AuthInputProps) {
  return (
    <div>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border ${
            error ? 'border-red-500' : 'border-gray-200'
          } rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}