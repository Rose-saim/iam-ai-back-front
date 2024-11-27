import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github, Building, Chrome } from 'lucide-react';
import { useAuth } from '../components/AuthContext';

export default function Signup() {
  const { signIn, error } = useAuth();
  const navigate = useNavigate();

  const handleOAuthSignup = async (provider: 'github' | 'google') => {
    try {
      await signIn(provider);
      navigate('/');
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="max-w-md mx-auto px-4 py-12">
        {/* ... rest of the JSX remains the same until the OAuth buttons ... */}
        
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleOAuthSignup('github')}
            className="w-full flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
          >
            <Github className="w-5 h-5 text-gray-600" />
            <span className="ml-2">GitHub</span>
          </button>
          <button 
            onClick={() => handleOAuthSignup('google')}
            className="w-full flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition bg-white hover:bg-gray-50"
          >
            <Chrome className="w-5 h-5 text-[#4285F4]" />
            <span className="ml-2">Google</span>
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
            {error.message}
          </div>
        )}
        
        {/* ... rest of the component remains the same ... */}
      </div>
    </div>
  );
}