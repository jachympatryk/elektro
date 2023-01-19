import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import classNames from "classnames";
import Carousel from "react-multi-carousel";

import { portfolioData1, portfolioData2 } from "./portfolio.constants";

import styles from "./portfolio.module.scss";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 4000 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 4,
    slidesToSlide: 4,
  },
  semiTablet: {
    breakpoint: { max: 1600, min: 1200 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 773 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 773, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
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
        <div className={styles.wrapper}>
          <Carousel
            responsive={responsive}
            swipeable
            rewind
            focusOnSelect
            infinite
            partialVisible
            renderDotsOutside
            autoPlay
            draggable
            containerClass={styles.carouselContainer}
            sliderClass={styles.carousel}
            itemClass={styles.item}
          >
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
          </Carousel>
        </div>

        <div className={styles.wrapper}>
          <Carousel
            responsive={responsive}
            swipeable
            rewind
            focusOnSelect
            infinite
            partialVisible
            renderDotsOutside
            autoPlay
            draggable
            containerClass={styles.carouselContainer}
            sliderClass={styles.carousel}
            itemClass={styles.item}
          >
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
          </Carousel>
        </div>
      </div>
    </div>
  );
};
