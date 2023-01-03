import React from "react";

import { Hero } from "./hero/hero";
import { Partners } from "./partners/partners";

import styles from "./landing.module.scss";

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Partners />
    </div>
  );
};
