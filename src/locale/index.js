import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import esTranslation from "./es.json";
import deTranslation from "./de.json";
const resources = {
  es: {
    translation: esTranslation,
  },
  de: {
    translation: deTranslation,
  },
};
i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default { i18n };
