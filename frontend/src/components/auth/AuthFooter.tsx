import React from 'react';
import { Link } from 'react-router-dom';

interface AuthFooterProps {
  text: string;
  linkText: string;
  linkTo: string;
}

export default function AuthFooter({ text, linkText, linkTo }: AuthFooterProps) {
  return (
    <p className="mt-8 text-center text-sm text-gray-500">
      {text}{' '}
      <Link
        to={linkTo}
        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
      >
        {linkText}
      </Link>
    </p>
  );
}