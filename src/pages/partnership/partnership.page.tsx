import React from "react";
import { Button, Typography } from "@mui/material";
import classNames from "classnames";

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
            <span>4</span> STEPS
          </Typography>
        </div>
      </div>
      <div className={styles.content}>
        {partnershipData.map(({ content, image, title, button }, index) => {
          const isEven = index % 2 === 1;

          return (
            <div className={classNames(styles.itemWrapper, { [styles.itemWrapperEven]: isEven })}>
              <div className={styles.dot}>{index + 1}</div>
              <img src={image} alt={title} />
              <Typography>{title}</Typography>
              <Typography>{content}</Typography>
              {button && (
                <Button disabled className={isEven ? styles.button : styles.buttonEven}>
                  {button}
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
