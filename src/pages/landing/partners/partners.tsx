import React from "react";
import { Button, Typography } from "@mui/material";

import { partnersData } from "./partners.constants";

import styles from "./partners.module.scss";

export const Partners = () => {
  return (
    <div className={styles.container}>
      <Button className={styles.button}>Let us be your Assembly Partner</Button>

      <Typography variant="h2">We implementing projects for our Partners in:</Typography>

      <div className={styles.content}>
        {partnersData.map(({ name, image, copy }) => (
          <div className={styles.partnerItem}>
            <img src={image} alt="country" />
            <Typography variant="h3">{name}</Typography>
            <Typography variant="h4">{copy}</Typography>
          </div>
        ))}
      </div>

      <Button className={styles.summaryButton}>LET US KNOW WHICH LOCATION FIT YOU</Button>

      <div className={styles.background} />
    </div>
  );
};
