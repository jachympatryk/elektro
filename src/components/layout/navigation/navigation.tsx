import React, { useState } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useDidUpdate } from "@better-typed/react-lifecycle-hooks";
import classNames from "classnames";

import { navigationData } from "./navigation.constants";
import { useWindowSize } from "hooks";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  const { width } = useWindowSize();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const isMobile = width < 997;

  useDidUpdate(() => {
    if (isMobile && isMenuOpen) setIsMenuOpen(false);
  }, [pathname]);

  useDidUpdate(() => {
    if (isMobile) setIsMenuOpen(false);
    if (!isMobile && isMenuOpen) setIsMenuOpen(false);
  }, [isMobile]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography className={styles.logo}>ELEKTRO</Typography>

        {isMobile && (
          <IconButton onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
        )}
      </div>
      {isMenuOpen && isMobile && (
        <div className={styles.menuMobile}>
          <div className={styles.links}>
            {navigationData.map(({ path, label }) => {
              const activePath = path === pathname;
              return (
                <Link className={classNames(styles.link, { [styles.activeLink]: activePath })} to={path}>
                  {label}
                </Link>
              );
            })}
            <Button className={styles.button}>Partnership</Button>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className={styles.menuDesktop}>
          {navigationData.map(({ path, label }) => {
            const activePath = path === pathname;
            return (
              <Link className={classNames(styles.link, { [styles.activeLink]: activePath })} to={path}>
                {label}
              </Link>
            );
          })}
          <Button className={styles.button}>Partnership</Button>
        </div>
      )}
    </div>
  );
};
