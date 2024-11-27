import React from 'react';
import axios from 'axios';
import { Chrome, Github } from 'lucide-react';
import AuthButton from './AuthButton';

// Gestion de la connexion avec Google
const handleGoogleSignIn = async () => {
  try {
    // Charger la bibliothèque Google API
    await new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = resolve;
      document.body.appendChild(script);
    });

    // Initialiser l'authentification Google
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID!, // Clé publique Google OAuth
        scope: 'profile email',
      });

      // Connexion automatique
      auth2.signIn().then(async (user) => {
        const profile = user.getBasicProfile();
        const token = user.getAuthResponse().id_token;

        console.log('Utilisateur Google:', profile.getName());
        console.log('Email:', profile.getEmail());
        console.log('Token Google:', token);

        // Envoyer le token au backend pour vérification
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/auth/google`,
            {
              token,
            }
          );

          console.log('Réponse backend Google:', response.data);
          // Stockez les données utilisateur si nécessaire
        } catch (error) {
          console.error(
            'Erreur lors de la validation du token Google avec le backend:',
            error
          );
        }
      });
    });
  } catch (error) {
    console.error('Erreur lors de la connexion Google:', error);
  }
};

// Gestion de la connexion avec GitHub
const handleGitHubSignIn = async () => {
  try {
    const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID!;
    const redirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URI!;
    const authWindow = window.open(
      `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`,
      '_blank',
      'width=500,height=600'
    );

    const interval = setInterval(async () => {
      try {
        if (authWindow?.closed) {
          clearInterval(interval);
          throw new Error('La fenêtre de connexion GitHub a été fermée.');
        }

        // Gestion du token récupéré via localStorage
        const token = localStorage.getItem('github-token');
        if (token) {
          clearInterval(interval);
          authWindow.close();

          console.log('Token GitHub:', token);

          // Envoyer le token au backend pour validation
          try {
            const response = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/auth/github`,
              {
                token,
              }
            );

            console.log('Réponse backend GitHub:', response.data);
            // Stockez les données utilisateur si nécessaire
          } catch (error) {
            console.error(
              'Erreur lors de la validation du token GitHub avec le backend:',
              error
            );
          }
        }
      } catch (error) {
        console.error('Erreur lors de la connexion GitHub:', error);
      }
    }, 1000);
  } catch (error) {
    console.error('Erreur lors de la connexion GitHub:', error);
  }
};

interface SocialAuthProps {
  onGoogleSignIn?: () => Promise<void>;
  onGitHubSignIn?: () => Promise<void>;
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
