import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Mail, Lock, Chrome } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';
import AuthCard from '../../components/auth/AuthCard';
import AuthInput from '../../components/auth/AuthInput';
import AuthSelect from '../../components/auth/AuthSelect';
import AuthButton from '../../components/auth/AuthButton';
import AuthFooter from '../../components/auth/AuthFooter';
import SocialAuth from '../../components/auth/SocialAuth';

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Retail',
  'Education',
  'Other'
];

const companySizes = [
  'Small (1-50 employees)',
  'Medium (51-250 employees)',
  'Large (251+ employees)'
];

export default function RegisterBusiness() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    accountType: 'B2B' as const,
    companyName: '',
    email: '',
    industry: '',
    companySize: '',
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
      title="Create Your Business Account"
      subtitle="Get started with AI solutions for your company"
      icon={<Building2 className="w-8 h-8" />}
    >
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-100 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          type="text"
          name="companyName"
          placeholder="Company Name"
          icon={Building2}
          value={formData.companyName}
          onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
        />

        <AuthInput
          type="email"
          name="email"
          placeholder="Business Email"
          icon={Mail}
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />

        <AuthSelect
          name="industry"
          label="Select Industry"
          icon={Building2}
          options={industries}
          value={formData.industry}
          onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
        />

        <AuthSelect
          name="companySize"
          label="Select Company Size"
          icon={Building2}
          options={companySizes}
          value={formData.companySize}
          onChange={(e) => setFormData(prev => ({ ...prev, companySize: e.target.value }))}
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

        <AuthButton>Create Business Account</AuthButton>
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