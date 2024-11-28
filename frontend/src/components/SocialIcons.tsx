import React from 'react';
import { GithubIcon } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/iamai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <GithubIcon className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialIcons;