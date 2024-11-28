import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Building2, Users, Briefcase, Chrome } from 'lucide-react';
import { useAuth } from '../lib/auth';
import QRCodeGenerator from '../components/QRCodeGenerator';

type UserType = 'individual' | 'business' | 'public';

interface FormData {
  userType: UserType;
  name: string;
  businessName?: string;
  organizationName?: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  service: string;
  businessType?: string;
  department?: string;
  vatNumber?: string;
  registrationNumber?: string;
  requestSubsidy: boolean;
}

const serviceOptions = {
  individual: ['AI Training', 'Toolkit Access'],
  business: ['Staff Training', 'Modernization of Tools', 'Change Management'],
  public: ['Municipal Services', 'Training Programs', 'Policy Advisory'],
};

const departmentOptions = [
  'Municipality',
  'Employment Agency',
  'Policy Advisory',
];

export default function Register() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    userType: 'individual',
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    service: '',
    requestSubsidy: false,
  });

  const handleOAuthSignup = async (provider: 'google') => {
    try {
      await signIn(provider);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Handle registration logic here
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              sign in to your existing account
            </Link>
          </p>
        </div>

        {/* OAuth Button */}
        <div className="mb-8">
          <button
            onClick={() => handleOAuthSignup('google')}
            className="w-full flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
          >
            <Chrome className="w-5 h-5 text-[#4285F4] mr-2" />
            <span>Continue with </span>
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with email
            </span>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Rest of the form remains the same */}
        {/* ... */}
      </div>
    </div>
  );
}
