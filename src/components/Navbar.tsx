import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { useAuth } from '../lib/auth/context';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', path: '/' },
    {
      title: 'Services',
      path: '/services',
      submenu: [
        { title: 'Business Solutions', path: '/services/b2b' },
        { title: 'Individual Training', path: '/services/b2c' },
        { title: 'Government Services', path: '/services/b2g' }
      ]
    },
    { title: 'Courses', path: '/courses' },
    { title: 'Resources', path: '/resources' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  const expertMenuItems = [
    { title: 'Dashboard', path: '/expert/dashboard' },
    { title: 'Missions', path: '/expert/missions' },
    { title: 'Trainings', path: '/expert/trainings' },
    { title: 'Calendar', path: '/expert/calendar' },
    { title: 'Analytics', path: '/expert/analytics' },
    { title: 'Messaging', path: '/expert/messaging' },
    { title: 'Profile', path: '/expert/profile' },
    { title: 'Finance', path: '/expert/finance' },
    { title: 'Support', path: '/expert/support' },
    { title: 'Settings', path: '/expert/settings' },
    { title: 'Reports', path: '/expert/reports' },
    { title: 'Feedback', path: '/expert/feedback' },
    { title: 'Community', path: '/expert/community' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Logo variant={isScrolled ? 'dark' : 'light'} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {user?.role === 'expert' ? (
              // Expert Navigation
              expertMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium ${
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.title}
                </Link>
              ))
            ) : (
              // Regular Navigation
              menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  {item.submenu ? (
                    <div className="relative">
                      <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        {item.title}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-sm font-medium ${
                        location.pathname === item.path
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))
            )}

            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/get-started"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {user?.role === 'expert' ? (
              // Expert Mobile Navigation
              expertMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))
            ) : (
              // Regular Mobile Navigation
              menuItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <>
                      <div className="px-3 py-2 text-base font-medium text-gray-700">
                        {item.title}
                      </div>
                      <div className="pl-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))
            )}

            {user ? (
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/get-started"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}