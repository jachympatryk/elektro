import React from "react";
import { Button, Typography } from "@mui/material";
import classNames from "classnames";

import { portfolioData } from "./portfolio.constants";

import { ReactComponent as K2Logo } from "assets/icons/Vector.svg";

import styles from "./portfolio.module.scss";

export const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.about}>
          <Typography>Our portfolio containes many different implementations.</Typography>
          <Typography>
            Our many years of experience and knowledge have allowed us to create reliable and aesthetic installations on
            various types of roofs in various European countries.
          </Typography>
        </div>
        <div className={styles.points}>
          <Typography>We are distinguished by the speed and reliability of the work performed.</Typography>
          <Typography>We focus on good communication.</Typography>
          <Typography>We understand responsibility and so we guarantee maintance-free implementation.</Typography>
          <Button>Partnership</Button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.background} />

        <div>
          <K2Logo />
          <Typography>AEROCOMPACT</Typography>
        </div>

        <div className={styles.wrapper}>
          {portfolioData.map(({ wide, image, power, label }) => (
            <div className={classNames(styles.item, wide && styles.itemWide)}>
              <div className={classNames(styles.itemHeader, power && styles.itemHeaderPower)}>
                {power && (
                  <div className={styles.power}>
                    <Typography>{power}</Typography>
                  </div>
                )}
                <Typography className={styles.label}>{label}</Typography>
              </div>
              <img src={image} alt="portfolio" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
