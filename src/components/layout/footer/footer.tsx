import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { footerData } from "./footer.constants";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">ELEKTRO</Typography>

      <div className={styles.content}>
        <Typography className={styles.sitemap}>Sitemap</Typography>

        <div className={styles.links}>
          {footerData.map(({ label, url }) => (
            <Link className={styles.link} to={url}>
              {label}
            </Link>
          ))}
        </div>

        <Typography className={styles.copyright}>Copyright 2023-2024 @ ELEKTRO</Typography>
      </div>
    </div>
  );
};
