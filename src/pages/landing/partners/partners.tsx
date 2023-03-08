import React from "react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { partnersData } from "./partners.constants";

import styles from "./partners.module.scss";

export const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Button className={styles.button}>{t("landing.partners.letUs")}</Button>

      <Typography variant="h2">{t("landing.partners.implementing")}</Typography>

      <div className={styles.content}>
        {partnersData(t).map(({ name, image, copy }) => (
          <div className={styles.partnerItem}>
            <img src={image} alt="country" />
            <Typography variant="h3">{name}</Typography>
            <Typography variant="h4">{copy}</Typography>
          </div>
        ))}
      </div>

      <Button className={styles.summaryButton}>{t("landing.partners.letUsKnow")}</Button>

      <div className={styles.background} />
    </div>
  );
};
