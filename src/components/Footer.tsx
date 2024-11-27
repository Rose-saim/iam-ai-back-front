import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold">I AM'AI</Link>
            <p className="mt-2 text-gray-600">
              Empowering the future with AI solutions
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/b2b" className="text-gray-600 hover:text-gray-900">Business Solutions</Link></li>
              <li><Link to="/services/b2c" className="text-gray-600 hover:text-gray-900">Individual Training</Link></li>
              <li><Link to="/services/b2g" className="text-gray-600 hover:text-gray-900">Government Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} I AM'AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}