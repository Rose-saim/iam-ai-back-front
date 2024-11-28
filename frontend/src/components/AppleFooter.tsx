import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Business Solutions', path: '/services/b2b' },
      { label: 'Individual Training', path: '/services/b2c' },
      { label: 'Government Services', path: '/services/b2g' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Courses', path: '/courses' },
      { label: 'Documentation', path: '/resources' },
      { label: 'Case Studies', path: '/case-studies' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/careers' }
    ]
  }
];

export default function AppleFooter() {
  return (
    <footer className="bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} I AM'AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}