import React from 'react';
import { Settings, Clock } from 'lucide-react';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-8">
          <Settings className="w-12 h-12 text-blue-600 animate-spin-slow" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-900">Under Maintenance</h1>
        <p className="text-gray-600 mt-2 mb-8 max-w-md">
          We're performing scheduled maintenance to improve our services.
          Please check back soon.
        </p>
        <div className="flex items-center justify-center text-gray-500">
          <Clock className="w-5 h-5 mr-2" />
          <span>Estimated completion: 2 hours</span>
        </div>
      </div>
    </div>
  );
}