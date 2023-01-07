import React from "react";
import { Typography } from "@mui/material";

import { useWindowSize } from "hooks";

import heroImage from "assets/images/hero-image.webp";
import heroImageDesktop from "assets/images/hero-image-desktop.jpg";

import styles from "./hero.module.scss";

export const Hero = () => {
  const { width } = useWindowSize();

  const isDesktop = width > 1024;

  const backgroundImage = isDesktop ? heroImageDesktop : heroImage;

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className={styles.container}>
      <div className={styles.header}>
        {!isDesktop && (
          <Typography variant="h1">
            We dont sell <br /> installations
          </Typography>
        )}

        {isDesktop && <Typography variant="h1">We dont sell installations</Typography>}
        <Typography variant="h2">We assembly PV system for our partners</Typography>
      </div>

      <div className={styles.content}>
        <Typography variant="h3">
          <span>Experts in the field of assembly</span> <br /> - our business card
        </Typography>
        <Typography variant="h3">
          We specialize in subcontracting PV montage services and we guarantee the highest quality of our work. Thanks
          to many years of experience and commitment of our employees, we are able to implement even the most complex
          projects. If you are looking for a solid and reliable partner for your customer’s investments, then our
          company is the perfect choice for you.
        </Typography>
      </div>
    </div>
  );
};
