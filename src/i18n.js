import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "brand-title": "Greek Gyros",
      "home-title": "Home",
      "menu-title": "Menu",
      "about-title": "About",
      "contact-title": "Contact",
      "delivery-title": "Delivery",
    },
  },
  ru: {
    translation: {
      "brand-title": "Греческий гирос",
      "home-title": "Дом",
      "menu-title": "Меню",
      "about-title": "Онас",
      "contact-title": "Контакт",
      "delivery-title": "Доставка",
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || "ru",
    // fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
