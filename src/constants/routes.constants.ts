import { RouteConstant } from "types";

export const LANDING_PAGE: RouteConstant = {
  path: "/",
  name: "Main page",
  auth: false,
  showNavigation: true,
};

export const LOGIN_PAGE: RouteConstant = {
  path: "/login",
  name: "Login",
  auth: false,
  showNavigation: false,
};

export const PORTFOLIO_PAGE: RouteConstant = {
  path: "/portfolio",
  name: "Portfolio",
  auth: false,
  showNavigation: true,
};

export const PARTNERSHIP_PAGE: RouteConstant = {
  path: "/partnership",
  name: "Partnership",
  auth: false,
  showNavigation: true,
};

export const CONTACT_PAGE: RouteConstant = {
  path: "/contact",
  name: "Contact",
  auth: false,
  showNavigation: true,
};
