import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useWindowSize } from "hooks";

import heroImage from "assets/images/hero-image.webp";
import heroImageDesktop from "assets/images/hero-image-desktop.jpg";

import styles from "./hero.module.scss";

export const Hero = () => {
  const { t } = useTranslation();
  const { width } = useWindowSize();

  const isDesktop = width > 1024;

  const backgroundImage = isDesktop ? heroImageDesktop : heroImage;

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className={styles.container}>
      <div className={styles.header}>
        {!isDesktop && (
          <Typography variant="h1">
            {t("landing.hero.weDontSell")} <br /> {t("landing.hero.installations")}
          </Typography>
        )}

        {isDesktop && <Typography variant="h1">{t("landing.hero.weDontSellInstallations")}</Typography>}
        <Typography variant="h2">{t("landing.hero.weAssembly")}</Typography>
      </div>

      <div className={styles.content}>
        <Typography variant="h3">
          <span>{t("landing.hero.experts")}</span> <br /> {t("landing.hero.ourBusinessCard")}
        </Typography>
        <Typography variant="h3">{t("landing.hero.copy")}</Typography>
      </div>
    </div>
  );
};
