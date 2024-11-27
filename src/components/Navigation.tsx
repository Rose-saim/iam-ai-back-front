import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  submenu?: MenuItem[];
}

interface NavigationProps {
  menuItems: MenuItem[];
}

export default function Navigation({ menuItems }: NavigationProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600';
  };

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AIAcademy
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className={`flex items-center space-x-2 ${isActive(item.path)}`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </button>
                
                {item.submenu && openSubmenu === item.title && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.icon}
                        <span className="ml-2">{subItem.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-blue-600 hover:text-blue-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}