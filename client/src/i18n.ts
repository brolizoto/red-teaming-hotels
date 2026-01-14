import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { de, en } from './locales/translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    fallbackLng: 'de',
    supportedLngs: ['de', 'en'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    debug: true, // Enable debugging
  });

// Debug: Log loaded resources
console.log('[i18n] Initialized with resources:', i18n.store.data);
console.log('[i18n] Current language:', i18n.language);

// Make i18n available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).i18n = i18n;
}

export default i18n;
