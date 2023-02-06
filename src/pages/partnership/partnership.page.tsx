import React from "react";
import { Button, Typography } from "@mui/material";

import { partnershipData } from "./partnership.constants";

import partnershipImage from "assets/images/partnership.png";

import styles from "./partnership.module.scss";

export const PartnershipPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header} style={{ backgroundImage: `url(${partnershipImage})` }}>
        <div className={styles.headerCopy}>
          <Typography variant="h4">Partnership in</Typography>
          <Typography variant="h3">
            <span>4</span> steps
          </Typography>
        </div>
      </div>
      <div className={styles.content}>
        {partnershipData.map(({ content, image, title, button }, index) => (
          <div className={styles.itemWrapper}>
            <div className={styles.dot}>{index + 1}</div>
            <img src={image} alt={title} />
            <Typography>{title}</Typography>
            <Typography>{content}</Typography>
            {button && <Button>{button}</Button>}
          </div>
        ))}
      </div>
    </div>
  );
};
