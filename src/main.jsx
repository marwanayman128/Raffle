import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import { BrowserRouter } from "react-router-dom"
import global_en from './translation/en/global.json'
import global_ar from './translation/ar/global.json'
import i18next from 'i18next';
import {  I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: global_en
    },
    ar: {
      translation: global_ar
    }
  },
  interpolation: {
    escapeValue: false,
  },
  react:{
    useSuspense:false
  },
  lng: 'en',
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    

      <Provider store={store}>
        <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
          </I18nextProvider>
        </BrowserRouter>
      </Provider>

  </React.StrictMode>
);
