import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Languages from '../constants/languages';
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  // lng: Languages.en,
  lng: Languages.ru,
  fallbackLng: Languages.en,
  interpolation: { escapeValue: false },
});

export default i18n;
