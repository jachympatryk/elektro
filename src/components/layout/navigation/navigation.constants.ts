import { TFunction } from "i18next";

export const navigationData = (t: TFunction) => [
  {
    path: "/",
    label: t("navigation.home"),
  },
  {
    path: "/portfolio",
    label: t("navigation.portfolio"),
  },
  {
    path: "/contact",
    label: t("navigation.contact"),
  },
  {
    path: "/service",
    label: t("navigation.service"),
  },
  {
    path: "/career",
    label: t("navigation.career"),
  },
];
