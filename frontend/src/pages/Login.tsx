import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth';
import { Github } from 'lucide-react';

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (provider: 'google' | 'github') => {
    try {
      if (provider === 'google') {
        // Connexion via Google
        await loadGoogleAPI();
        const auth2 = window.gapi.auth2.getAuthInstance();
        const googleUser = await auth2.signIn();
        const token = googleUser.getAuthResponse().id_token;

        console.log('Google Token:', token);

        // Envoyer le token au backend pour vérification
        await signIn('google', token);
      } else if (provider === 'github') {
        // Connexion via GitHub
        const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID!;
        const redirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URI!;
        const authWindow = window.open(
          `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`,
          '_blank',
          'width=500,height=600'
        );

        // Vérifier si le token est récupéré
        const token = await waitForGitHubToken(authWindow);
        console.log('GitHub Token:', token);

        // Envoyer le token au backend pour vérification
        await signIn('github', token);
      }

      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const loadGoogleAPI = async (): Promise<void> => {
    await new Promise((resolve) => {
      if (document.getElementById('google-api')) return resolve();
      const script = document.createElement('script');
      script.id = 'google-api';
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = resolve;
      document.body.appendChild(script);
    });
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'profile email',
      });
    });
  };

  const waitForGitHubToken = (authWindow: Window | null): Promise<string> => {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        try {
          if (authWindow?.closed) {
            clearInterval(interval);
            reject(new Error('GitHub login window was closed.'));
          }

          // Suppose the backend sets the token in localStorage (or via cookies)
          const token = localStorage.getItem('github-token');
          if (token) {
            clearInterval(interval);
            authWindow?.close();
            resolve(token);
          }
        } catch (error) {
          console.error('Error retrieving GitHub token:', error);
        }
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Connexion Google */}
            <button
              onClick={() => handleSignIn('google')}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign in with Google
            </button>

            {/* Connexion GitHub */}
            <button
              onClick={() => handleSignIn('github')}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <Github className="w-5 h-5 mr-2" />
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
