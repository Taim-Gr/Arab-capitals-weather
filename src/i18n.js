import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Minmum: "Minmum",
          Maximum: "Maximum",
          damascus: "Damascus",
          "broken clouds": "broken clouds",
          "clear sky": "clear sky",
          "few clouds": "few clouds",
          "scattered clouds": "scattered clouds",
          "shower rain": "shower rain",
          rain: "rain",
          thunderstorm: "thunderstorm",
          snow: "snow",
          mist: "mist",
          // City translations
          Riyadh: "Riyadh",
          "Abu Dhabi": "Abu Dhabi",
          Kuwait: "Kuwait",
          Tripoli: "Tripoli",
          Doha: "Doha",
          Cairo: "Cairo",
          Muscat: "Muscat",
          Amman: "Amman",
          Jerusalem: "Jerusalem",
          Manama: "Manama",
          Sanaa: "Sanaa",
          Damascus: "Damascus",
          Baghdad: "Baghdad",
          Algiers: "Algiers",
          Tunis: "Tunis",

          Rabat: "Rabat",
          Beirut: "Beirut",
          Djibouti: "Djibouti",
          Mogadishu: "Mogadishu",
          Khartoum: "Khartoum",
          Moroni: "Moroni",
          Nouakchott: "Nouakchott",
        },
      },
      ar: {
        translation: {
          Minmum: "الصغرى",
          Maximum: "الكبرى",
          damascus: "دمشق",
          "broken clouds": "غيوم جزئية",
          "clear sky": "سماء صافية",
          "few clouds": "القليل من الغيوم",
          "scattered clouds": "غائم",
          "shower rain": "امطار غزيرة",
          dust: "مغبر",
          rain: "ممطر",
          thunderstorm: "عاصف",
          snow: "تساقط ثلوج",
          mist: "ضبابي",
          // City translations
          Riyadh: "الرياض",
          "Abu Dhabi": "أبو ظبي",
          Kuwait: "الكويت",
          Tripoli: "طرابلس",
          Doha: "الدوحة",
          Cairo: "القاهرة",
          Muscat: "مسقط",
          Amman: "عمان",
          Jerusalem: "القدس",
          Manama: "المنامة",
          Sanaa: "صنعاء",
          Damascus: "دمشق",
          Baghdad: "بغداد",
          Algiers: "الجزائر",
          Tunis: "تونس",
          // Note: "Rabat" is the official capital of Morocco.
          Rabat: "الرباط",
          Beirut: "بيروت",
          Djibouti: "جيبوتي",
          Mogadishu: "مقديشيو",
          Khartoum: "الخرطوم",
          Moroni: "موروني",
          Nouakchott: "نواكشوط",
        },
      },
    },
  });

export default i18n;
