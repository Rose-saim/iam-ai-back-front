import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      common: {
        login: 'Login',
        signup: 'Sign Up',
        explore: 'Explore',
        learnMore: 'Learn More',
        contact: 'Contact Us'
      },
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        resources: 'Resources'
      }
    }
  },
  fr: {
    translation: {
      common: {
        login: 'Connexion',
        signup: "S'inscrire",
        explore: 'Explorer',
        learnMore: 'En savoir plus',
        contact: 'Contactez-nous'
      },
      nav: {
        home: 'Accueil',
        services: 'Services',
        about: 'À propos',
        resources: 'Ressources'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;