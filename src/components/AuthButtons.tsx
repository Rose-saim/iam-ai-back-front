import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Mail } from 'lucide-react';

export default function AuthButtons() {
  return (
    <div className="flex flex-col space-y-4">
      <button className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        <span>Sign in with </span>
      </button>

      <button className="flex items-center justify-center w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-sm hover:bg-gray-800">
        <Mail className="w-5 h-5 mr-2" />
        <span>Sign in with Email</span>
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue </span>
        </div>
      </div>

      <Link
        to="/register"
        className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700"
      >
        Create an account
      </Link>

      <Link
        to="/login"
        className="flex items-center justify-center w-full px-4 py-2 text-blue-600 bg-transparent border border-blue-600 rounded-lg shadow-sm hover:bg-blue-50"
      >
        <LogIn className="w-5 h-5 mr-2" />
        Sign in
      </Link>
    </div>
  );
}
