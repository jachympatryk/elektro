import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "i18next";
import { Button } from "@mui/material";

import { RootState, setLocale } from "store";
import { DEFAULT_LOCALE } from "../../../constants/app.constants";

import { ReactComponent as Poland } from "assets/icons/poland.svg";
import { ReactComponent as Germany } from "assets/icons/germany.svg";
import { ReactComponent as England } from "assets/icons/england.svg";

import styles from "./language-select.module.scss";

export const LanguageSelect = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { locale } = useSelector((state: RootState) => state.app);

  const mapLocale = (selectedLocale?: string) => {
    if (selectedLocale === "pl-PL") return "pl-PL";
    return selectedLocale || DEFAULT_LOCALE;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleLanguageChange = async (event: React.MouseEvent<HTMLElement>) => {
    const selectedLocale = mapLocale(event.currentTarget.dataset.language);
    dispatch(setLocale(selectedLocale));
    await changeLanguage(selectedLocale);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      {locale === "pl-PL" && <Poland onClick={toggleMenu} className={styles.flag} />}
      {locale === "en-US" && <England onClick={toggleMenu} className={styles.flag} />}
      {locale === "de-DE" && <Germany onClick={toggleMenu} className={styles.flag} />}

      {isOpen && (
        <div className={styles.menu}>
          <Button data-language="pl-PL" onClick={handleLanguageChange}>
            pl
          </Button>
          <Button onClick={handleLanguageChange} data-language="en-US">
            en
          </Button>
          <Button onClick={handleLanguageChange} data-language="de-DE">
            de
          </Button>
        </div>
      )}
    </div>
  );
};
