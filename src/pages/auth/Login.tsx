import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { useAuth } from '../../lib/auth/context';
import AuthCard from '../../components/auth/AuthCard';
import AuthInput from '../../components/auth/AuthInput';
import AuthButton from '../../components/auth/AuthButton';
import AuthFooter from '../../components/auth/AuthFooter';
import SocialAuth from '../../components/auth/SocialAuth';

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const { login, signIn } = useAuth();
  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(formData); // Logique backend pour l'authentification email/mot de passe
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to login');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn('google'); // Logique backend pour Google OAuth
      navigate('/dashboard');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to login with Google'
      );
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await signIn('github'); // Logique backend pour GitHub OAuth
      navigate('/dashboard');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to login with GitHub'
      );
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Log in to access your personalized AI dashboard"
      icon={<Mail className="w-8 h-8" />}
    >
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-100 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          type="email"
          name="email"
          placeholder="Email address"
          icon={Mail}
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />

        <AuthInput
          type="password"
          name="password"
          placeholder="Password"
          icon={Lock}
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />

        <AuthButton>Log In</AuthButton>
      </form>

      <div className="mt-6">
        <SocialAuth
          onGoogleSignIn={handleGoogleLogin}
          onGitHubSignIn={handleGitHubLogin}
        />
      </div>

      <AuthFooter
        text="Don't have an account?"
        linkText="Get Started"
        linkTo="/get-started"
      />
    </AuthCard>
  );
}
