import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInFrench from '../locales/fr/translation.json'; // French translations
import translationsInArabic from '../locales/ar/translation.json'; // Arabic translations

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  fr: {
    translation: translationsInFrench
  },
  ar: {
    translation: translationsInArabic
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default language is English
    debug: true,
    fallbackLng: "en", // Fallback to English if the selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;