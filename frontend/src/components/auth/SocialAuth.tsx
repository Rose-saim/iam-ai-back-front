import React from 'react';
import axios from 'axios';
import { Chrome, Github } from 'lucide-react';
import AuthButton from './AuthButton';

const handleGoogleSignIn = () => {
  // Redirection vers le backend pour gérer Google OAuth
  window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
};

const handleGitHubSignIn = () => {
  // Redirection vers le backend pour gérer GitHub OAuth
  window.location.href = `${import.meta.env.VITE_API_URL}/auth/github`;
};

interface SocialAuthProps {
  onGoogleSignIn?: () => void;
  onGitHubSignIn?: () => void;
}

export default function SocialAuth({
  onGoogleSignIn = handleGoogleSignIn,
  onGitHubSignIn = handleGitHubSignIn,
}: SocialAuthProps) {
  return (
    <>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">Ou continuer avec</span>
        </div>
      </div>

      {/* Bouton Google */}
      <AuthButton type="button" variant="secondary" onClick={onGoogleSignIn}>
        <div className="flex items-center justify-center">
          <Chrome className="w-5 h-5 mr-3" />
          Continuer avec Google
        </div>
      </AuthButton>

      {/* Bouton GitHub */}
      <AuthButton
        type="button"
        variant="secondary"
        onClick={onGitHubSignIn}
        className="mt-4"
      >
        <div className="flex items-center justify-center">
          <Github className="w-5 h-5 mr-3" />
          Continuer avec GitHub
        </div>
      </AuthButton>
    </>
  );
}

