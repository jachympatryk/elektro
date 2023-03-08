import { TFunction } from "i18next";

export const footerData = (t: TFunction) => [
  {
    label: t("footer.home"),
    url: "/",
  },
  {
    label: t("footer.portfolio"),
    url: "/portfolio",
  },
  {
    label: t("footer.contact"),
    url: "/contact",
  },
  {
    label: t("footer.service"),
    url: "/service",
  },
  {
    label: t("footer.career"),
    url: "/career",
  },
  {
    label: t("footer.partnership"),
    url: "/partnership",
  },
];
