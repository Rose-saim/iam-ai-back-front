import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../lib/auth/context';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generalMenuItems = [
    { title: 'Entreprises', path: '/services/b2b' },
    { title: 'Particuliers', path: '/services/b2c' },
    { title: 'Courses', path: '/courses' },
    { title: 'About', path: '/about' },
  ];

  const expertMenuItems = [
    { title: 'Dashboard', path: '/expert/dashboard' },
    { title: 'Missions', path: '/expert/missions' },
    { title: 'Analytics', path: '/expert/analytics' },
    { title: 'Profile', path: '/expert/profile' },
  ];

  const b2bMenuItems = [
    { title: 'Dashboard', path: '/b2b/dashboard' },
    { title: 'Solutions', path: '/b2b/solutions' },
    { title: 'Reports', path: '/b2b/reports' },
    { title: 'Profile', path: '/b2b/profile' },
  ];

  const b2cMenuItems = [
    { title: 'Dashboard', path: '/b2c/dashboard' },
    { title: 'Courses', path: '/b2c/courses' },
    { title: 'Profile', path: '/b2c/profile' },
  ];

  const getMenuItems = () => {
    console.log('user')
    console.log(user)
    if (user?.role === 'expert') return expertMenuItems;
    if (user?.role === 'B2B') return b2bMenuItems;
    if (user?.role === 'B2C') return b2cMenuItems;
    return generalMenuItems;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent' }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold">I AM'AI</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {getMenuItems().map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.title}
              </Link>
            ))}

            {user ? (
              <button 
                onClick={logout}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                {/* <Link
                  to="/login"
                  className="nav-link"
                >
                  Login
                </Link>
                <Link
                  to="/get-started"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Get Started
                </Link> */}
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {getMenuItems().map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}

            {user ? (
              <button 
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900"
              >
                Logout
              </button>
            ) : (
              <>
                {/* <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link> */}
                {/* <Link
                  to="/get-started"
                  className="block px-3 py-2 text-base font-medium text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link> */}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
