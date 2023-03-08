import React from "react";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";

import { ProviderProps } from "./providers.types";
import { resources } from "translations/resources";
import { DEFAULT_LOCALE } from "constants/app.constants";
import { STORAGE_FIELDS } from "constants/storage.constants";
import { store } from "store";

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem(STORAGE_FIELDS.language) || DEFAULT_LOCALE,
  })
  .then();

i18next.on("languageChanged", (lang) => {
  localStorage.setItem(STORAGE_FIELDS.language, lang);
});

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>;
    </Provider>
  );
};
