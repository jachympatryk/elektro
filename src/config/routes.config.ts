import { LandingPage, LoginPage, PortfolioPage } from "pages";
import { RouteConfig } from "types";
import {
  CONTACT_PAGE,
  LANDING_PAGE,
  LOGIN_PAGE,
  PARTNERSHIP_PAGE,
  PORTFOLIO_PAGE,
  SERVICE_PAGE,
} from "constants/routes.constants";
import { PartnershipPage } from "../pages/partnership/partnership.page";
import { ContactPage } from "../pages/contact/contact.page";
import { ServicePage } from "../pages/service/service.page";

export const routes: RouteConfig[] = [
  { ...LANDING_PAGE, component: LandingPage },
  { ...LOGIN_PAGE, component: LoginPage },
  { ...PORTFOLIO_PAGE, component: PortfolioPage },
  { ...PARTNERSHIP_PAGE, component: PartnershipPage },
  { ...CONTACT_PAGE, component: ContactPage },
  { ...SERVICE_PAGE, component: ServicePage },
];
