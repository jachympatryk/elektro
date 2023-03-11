import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import classNames from "classnames";

import { portfolioData1, portfolioData2 } from "./portfolio.constants";

import { ReactComponent as K2Logo } from "assets/icons/k2system.svg";

import styles from "./portfolio.module.scss";

export const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.about}>
          <Typography variant="h2">Our portfolio containes many different implementations.</Typography>
          <Typography variant="h3">
            Our many years of experience and knowledge have allowed us to create reliable and aesthetic installations on
            various types of roofs in various European countries.
          </Typography>
        </div>
        <div className={styles.points}>
          <div>
            <IconButton>1</IconButton>
            <Typography>We are distinguished by the speed and reliability of the work performed.</Typography>
          </div>
          <div>
            <IconButton>2</IconButton>
            <Typography>We focus on good communication.</Typography>
          </div>
          <div>
            <IconButton>3</IconButton>
            <Typography>We understand responsibility and so we guarantee maintance-free implementation.</Typography>
          </div>
          <Button className={styles.partnershipButton}>Partnership</Button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.banner}>
          <div className={styles.bannerWrapper}>
            <K2Logo className={styles.icon} />
            <Typography>AEROCOMPACT</Typography>
          </div>
        </div>

        <div className={styles.wrapper}>
          {portfolioData1.map(({ wide, image, power, label }) => (
            <div className={classNames(styles.itemm, wide && styles.itemWide)}>
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

        <div className={styles.wrapper}>
          {portfolioData2.map(({ wide, image, power, label }) => (
            <div className={classNames(styles.itemm, wide && styles.itemWide)}>
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
