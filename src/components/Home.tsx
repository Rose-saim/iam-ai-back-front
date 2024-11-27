import React from 'react';
import { useAuth } from '../lib/auth';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">I AM'AI</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{user.name}</span>
              <button
                onClick={handleSignOut}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium text-gray-700"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome to I AM'AI</h2>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-700">
                Your AI-powered learning platform for professional development.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}