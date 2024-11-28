import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronRight } from 'lucide-react';

export default function AppleNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[rgba(251,251,253,0.8)] backdrop-blur-md' : 'bg-[#fbfbfd]'
    }`}>
      <div className="max-w-[980px] mx-auto">
        <div className="flex items-center justify-between h-12 px-4">
          <Link to="/" className="text-xl font-semibold">
            I AM'AI
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-sm text-gray-900 hover:text-gray-500">
              Services
            </Link>
            <Link to="/courses" className="text-sm text-gray-900 hover:text-gray-500">
              Courses
            </Link>
            <Link to="/resources" className="text-sm text-gray-900 hover:text-gray-500">
              Resources
            </Link>
            <Link to="/about" className="text-sm text-gray-900 hover:text-gray-500">
              About
            </Link>
            <Link to="/contact" className="text-sm text-gray-900 hover:text-gray-500">
              Contact
            </Link>
            <Search className="w-4 h-4 text-gray-900" />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fbfbfd] border-t">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/services"
              className="flex items-center justify-between py-2 text-gray-900"
            >
              Services
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/courses"
              className="flex items-center justify-between py-2 text-gray-900"
            >
              Courses
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/resources"
              className="flex items-center justify-between py-2 text-gray-900"
            >
              Resources
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-between py-2 text-gray-900"
            >
              About
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-between py-2 text-gray-900"
            >
              Contact
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}