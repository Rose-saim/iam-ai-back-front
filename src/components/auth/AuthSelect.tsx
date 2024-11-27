import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AuthSelectProps {
  name: string;
  label: string;
  icon: LucideIcon;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

export default function AuthSelect({
  name,
  label,
  icon: Icon,
  options,
  value,
  onChange,
  error
}: AuthSelectProps) {
  return (
    <div>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <select
          name={name}
          value={value}
          onChange={onChange}
          required
          className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border ${
            error ? 'border-red-500' : 'border-gray-200'
          } rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-200`}
        >
          <option value="">{label}</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}