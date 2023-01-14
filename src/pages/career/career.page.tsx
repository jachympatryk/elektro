import React from "react";
import { Button, Typography } from "@mui/material";

import { careerData } from "./career.constants";

import careerImage from "assets/images/career.png";

import styles from "./career.module.scss";

export const CareerPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero} style={{ backgroundImage: `url(${careerImage})` }} />
      <div className={styles.copyMobile}>
        <Typography>We don’t need your CV.</Typography>
        <Typography>We focus on good, friendly relationships.</Typography>
        <Typography>We are clear about goals and earnings.</Typography>
        <Button className={styles.button}>JOIN US</Button>
      </div>

      <div className={styles.content}>
        {careerData.map((item) => (
          <div className={styles.item}>
            <img src={item.image} alt={item.label} />
            <Typography variant="h3">{item.label}</Typography>
            <Typography variant="h4">{item.content}</Typography>
            <Button className={styles.itemButton}>contact</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
