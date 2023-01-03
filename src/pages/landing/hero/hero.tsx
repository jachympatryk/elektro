import React from "react";
import { Typography } from "@mui/material";

import heroImage from "assets/images/hero-image.webp";

import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${heroImage})` }} className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h1">
          We dont sell <br /> installations
        </Typography>
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
