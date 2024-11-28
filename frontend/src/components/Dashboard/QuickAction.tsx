import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickActionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export default function QuickAction({ icon: Icon, title, description, link }: QuickActionProps) {
  return (
    <Link to={link} className="p-4 text-left rounded-lg hover:bg-gray-50 transition-colors">
      <Icon className="w-5 h-5 text-blue-600 mb-2" />
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Link>
  );
}