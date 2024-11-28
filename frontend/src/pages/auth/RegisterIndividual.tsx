import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Mail, Lock, Chrome, GraduationCap } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';
import AuthCard from '../../components/auth/AuthCard';
import AuthInput from '../../components/auth/AuthInput';
import AuthSelect from '../../components/auth/AuthSelect';
import AuthButton from '../../components/auth/AuthButton';
import AuthFooter from '../../components/auth/AuthFooter';
import SocialAuth from '../../components/auth/SocialAuth';

const interests = [
  'AI Fundamentals',
  'Machine Learning',
  'Data Analytics',
  'Natural Language Processing',
  'Computer Vision',
  'Robotics',
  'Other'
];

export default function RegisterIndividual() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    accountType: 'B2C' as const,
    fullName: '',
    email: '',
    fieldOfInterest: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await register(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  const handleGoogleSignup = async () => {
    try {
      // Handle Google signup
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up with Google');
    }
  };

  return (
    <AuthCard
      title="Create Your Individual Account"
      subtitle="Start your AI learning journey today"
      icon={<Users className="w-8 h-8" />}
    >
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-100 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          type="text"
          name="fullName"
          placeholder="Full Name"
          icon={Users}
          value={formData.fullName}
          onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
        />

        <AuthInput
          type="email"
          name="email"
          placeholder="Email Address"
          icon={Mail}
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />

        <AuthSelect
          name="fieldOfInterest"
          label="Select Field of Interest"
          icon={GraduationCap}
          options={interests}
          value={formData.fieldOfInterest}
          onChange={(e) => setFormData(prev => ({ ...prev, fieldOfInterest: e.target.value }))}
        />

        <AuthInput
          type="password"
          name="password"
          placeholder="Password"
          icon={Lock}
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
        />

        <AuthInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          icon={Lock}
          value={formData.confirmPassword}
          onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
        />

        <AuthButton>Create Individual Account</AuthButton>
      </form>

      <div className="mt-6">
        <SocialAuth onGoogleSignIn={handleGoogleSignup} />
      </div>

      <AuthFooter
        text="Already have an account?"
        linkText="Log In"
        linkTo="/login"
      />
    </AuthCard>
  );
}