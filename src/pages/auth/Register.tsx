import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Users, Chrome, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../lib/auth';
import type { AccountType } from '../../lib/types';

const accountTypes = [
  {
    type: 'B2B' as AccountType,
    icon: <Building2 className="w-8 h-8" />,
    title: 'Business Account',
    description:
      'For companies looking to leverage AI for growth and efficiency',
  },
  {
    type: 'B2C' as AccountType,
    icon: <Users className="w-8 h-8" />,
    title: 'Individual Account',
    description:
      'For professionals seeking personalized AI training and toolkits',
  },
];

export default function Register(): JSX.Element {
  const navigate = useNavigate();
  const { registerWithGoogle, registerWithGitHub } = useAuth();
  const [error, setError] = useState<string>('');
  const [selectedType, setSelectedType] = useState<AccountType | null>(null);

  const handleOAuthSignup = async (provider: 'google' | 'github') => {
    try {
      if (!selectedType) {
        setError('Please select an account type before continuing.');
        return;
      }
      if (provider === 'google') {
        await registerWithGoogle(selectedType);
      } else if (provider === 'github') {
        await registerWithGitHub(selectedType);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : `Failed to sign up with ${provider}`
      );
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl px-6"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Started with I AM'AI
          </h1>
          <p className="text-xl text-gray-300">
            Create your account and unlock the power of AI solutions tailored
            for you
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-100 text-sm text-center">
            {error}
          </div>
        )}

        {/* Account Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {accountTypes.map((type) => (
            <motion.button
              key={type.type}
              onClick={() => setSelectedType(type.type)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                selectedType === type.type
                  ? 'bg-white/20 backdrop-blur-lg border-2 border-blue-400'
                  : 'bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15'
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                  selectedType === type.type
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-white/10 text-white'
                }`}
              >
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {type.title}
              </h3>
              <p className="text-gray-300 text-sm">{type.description}</p>
            </motion.button>
          ))}
        </div>

        {/* OAuth Signup Buttons */}
        <div className="max-w-md mx-auto">
          <button
            onClick={() => handleOAuthSignup('google')}
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 mb-4"
          >
            <Chrome className="w-5 h-5 mr-2" />
            Continue with
          </button>

          <button
            onClick={() => handleOAuthSignup('github')}
            className="w-full flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:shadow-lg transition-all duration-300 mb-6"
          >
            <Github className="w-5 h-5 mr-2" />
            Continue with GitHub
          </button>

          {/* Footer */}
          <div className="text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
