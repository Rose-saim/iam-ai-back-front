import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label={`Switch to ${i18n.language === 'en' ? 'French' : 'English'}`}
    >
      <Globe className="h-5 w-5 text-gray-600" />
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </span>
    </button>
  );
}