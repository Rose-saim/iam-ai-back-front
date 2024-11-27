import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Mail, Lock, GraduationCap, Globe, Code } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';
import AuthCard from '../../components/auth/AuthCard';
import AuthInput from '../../components/auth/AuthInput';
import AuthSelect from '../../components/auth/AuthSelect';
import AuthButton from '../../components/auth/AuthButton';
import AuthFooter from '../../components/auth/AuthFooter';
import SocialAuth from '../../components/auth/SocialAuth';

const expertiseAreas = [
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'Computer Vision',
  'AI Integration',
  'Process Automation',
  'AI Strategy',
  'Data Science',
  'MLOps',
  'AI Training'
];

const certifications = [
  'AWS Machine Learning',
  'Google Cloud AI',
  'Microsoft Azure AI',
  'TensorFlow',
  'PyTorch',
  'IBM AI Engineering',
  'Deep Learning Specialization',
  'Other'
];

const languages = [
  'English',
  'French',
  'German',
  'Spanish',
  'Chinese',
  'Japanese',
  'Other'
];

const roles = [
  { value: 'trainer', label: 'AI Trainer' },
  { value: 'consultant', label: 'AI Consultant' },
  { value: 'integrator', label: 'AI Integration Specialist' }
];

export default function RegisterExpert() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    accountType: 'expert' as const,
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    expertise: [] as string[],
    yearsOfExperience: '',
    certifications: [] as string[],
    availability: '',
    preferredRoles: [] as string[],
    languages: [] as string[],
    linkedIn: '',
    github: '',
    portfolio: ''
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

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>, field: string) => {
    const options = e.target.options;
    const values = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setFormData(prev => ({ ...prev, [field]: values }));
  };

  return (
    <AuthCard
      title="Join Our Expert Team"
      subtitle="Share your AI expertise and help transform businesses"
      icon={<GraduationCap className="w-8 h-8" />}
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
          icon={Briefcase}
          value={formData.fullName}
          onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
        />

        <AuthInput
          type="email"
          name="email"
          placeholder="Professional Email"
          icon={Mail}
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Areas of Expertise
          </label>
          <select
            multiple
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleMultiSelect(e, 'expertise')}
          >
            {expertiseAreas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <AuthInput
          type="number"
          name="yearsOfExperience"
          placeholder="Years of Experience"
          icon={Briefcase}
          value={formData.yearsOfExperience}
          onChange={(e) => setFormData(prev => ({ ...prev, yearsOfExperience: e.target.value }))}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Certifications
          </label>
          <select
            multiple
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleMultiSelect(e, 'certifications')}
          >
            {certifications.map(cert => (
              <option key={cert} value={cert}>{cert}</option>
            ))}
          </select>
        </div>

        <AuthSelect
          name="availability"
          label="Availability"
          icon={Briefcase}
          options={['Full-time', 'Part-time', 'Contract']}
          value={formData.availability}
          onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Roles
          </label>
          <select
            multiple
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleMultiSelect(e, 'preferredRoles')}
          >
            {roles.map(role => (
              <option key={role.value} value={role.value}>{role.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Languages
          </label>
          <select
            multiple
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleMultiSelect(e, 'languages')}
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <AuthInput
          type="url"
          name="linkedIn"
          placeholder="LinkedIn Profile URL"
          icon={Globe}
          value={formData.linkedIn}
          onChange={(e) => setFormData(prev => ({ ...prev, linkedIn: e.target.value }))}
        />

        <AuthInput
          type="url"
          name="github"
          placeholder="GitHub Profile URL"
          icon={Code}
          value={formData.github}
          onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
        />

        <AuthInput
          type="url"
          name="portfolio"
          placeholder="Portfolio Website URL (optional)"
          icon={Globe}
          required={false}
          value={formData.portfolio}
          onChange={(e) => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
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

        <AuthButton>Join as Expert</AuthButton>
      </form>

      <div className="mt-6">
        <SocialAuth onGoogleSignIn={() => {}} />
      </div>

      <AuthFooter
        text="Already have an account?"
        linkText="Log In"
        linkTo="/login"
      />
    </AuthCard>
  );
}