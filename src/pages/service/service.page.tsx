import React from "react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { serviceData } from "./service.constants";

import serviceImage from "assets/images/service2.png";

import styles from "./service.module.scss";

export const ServicePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.background} style={{ backgroundImage: `url(${serviceImage})` }} />

        <div className={styles.copy}>
          <div className={styles.copyItem}>
            <Typography variant="h2">{t("service.service")}</Typography>
            <Typography variant="h3">{t("service.copyHeader")}</Typography>
          </div>

          <div className={styles.copyItem}>
            <Typography variant="h2">{t("service.takingCare")}</Typography>
            <Typography variant="h3">{t("service.takingCareCopy")} </Typography>
          </div>

          <Button className={styles.button}>{t("service.sendUsMessage")}</Button>
        </div>
      </div>

      <div className={styles.content}>
        <Typography variant="h2">{t("service.hireUs")}</Typography>

        <div className={styles.contentWrapper}>
          {serviceData(t).map(({ content, label, image }) => (
            <div className={styles.item}>
              <img src={image} alt={label} />
              <Typography variant="h3">{label}</Typography>
              <Typography variant="h4">{content}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
