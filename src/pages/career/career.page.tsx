import React from "react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { careerData } from "./career.constants";

import careerImage from "assets/images/career.png";

import styles from "./career.module.scss";

export const CareerPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.hero} style={{ backgroundImage: `url(${careerImage})` }} />
      <div className={styles.copyMobile}>
        <Typography>{t("career.dontCv")}</Typography>
        <Typography>{t("career.focus")}</Typography>
        <Typography>{t("career.areClear")}</Typography>
        <Button className={styles.button}>{t("career.joinUs")}</Button>
      </div>

      <div className={styles.content}>
        {careerData(t).map((item) => (
          <div className={styles.item}>
            <img src={item.image} alt={item.label} />
            <Typography variant="h3">{item.label}</Typography>
            <Typography variant="h4">{item.content}</Typography>
            <Button className={styles.itemButton}>{t("career.contact")}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
