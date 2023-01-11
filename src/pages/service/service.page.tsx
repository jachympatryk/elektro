import React from "react";
import { Button, Typography } from "@mui/material";

import { serviceData } from "./service.constants";

import serviceImage from "assets/images/service2.png";

import styles from "./service.module.scss";

export const ServicePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.background} style={{ backgroundImage: `url(${serviceImage})` }} />

        <div className={styles.copy}>
          <div className={styles.copyItem}>
            <Typography variant="h2">SERVICE</Typography>
            <Typography variant="h3">
              Many years of experience teach us that a well-executed installation should produce electricity for many
              years. However, we know the specificity of the industry.
            </Typography>
          </div>

          <div className={styles.copyItem}>
            <Typography variant="h2">TAKING CARE</Typography>
            <Typography variant="h3">
              We understand the responsibility. That’s why we provide inspection services for our partners.
            </Typography>
          </div>

          <Button className={styles.button}>Send us message</Button>
        </div>
      </div>

      <div className={styles.content}>
        <Typography variant="h2">Hire us for the service of electrical and photovoltaic installations</Typography>

        <div className={styles.contentWrapper}>
          {serviceData.map(({ content, label, image }) => (
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
