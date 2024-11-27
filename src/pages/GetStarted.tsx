import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const accountTypes = [
  {
    type: 'business',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Business Account',
    description: 'For companies seeking AI implementation and training',
    path: '/register-business'
  },
  {
    type: 'individual',
    icon: <Users className="w-8 h-8" />,
    title: 'Individual Account',
    description: 'For professionals looking to enhance their AI skills',
    path: '/register-individual'
  },
  {
    type: 'expert',
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Expert Account',
    description: 'For AI trainers, consultants, and integration specialists',
    path: '/register-expert'
  }
];

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Account Type
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the account type that best matches your needs and start your AI journey today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {accountTypes.map((account, index) => (
            <motion.div
              key={account.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to={account.path}
                className="block h-full bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    {account.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{account.title}</h3>
                  <p className="text-gray-600">{account.description}</p>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t">
                  <span className="text-blue-600 font-medium flex items-center">
                    Get Started
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}