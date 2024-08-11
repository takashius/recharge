import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./src/locales/en/common.json"
import historyEn from "./src/locales/en/history.json"
import es from "./src/locales/es/common.json"
import historyEs from "./src/locales/es/history.json"

const enLocale = {
  "translation": { ...en, ...historyEn }
}
const esLocale = {
  "translation": { ...es, ...historyEs }
}

i18n
  .use(initReactI18next)
  .init({
    resources: { 
      en: enLocale, 
      es: esLocale
    },
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
