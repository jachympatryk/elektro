import { TFunction } from "i18next";

import austria from "assets/images/partners-austria.webp";
import germany from "assets/images/partners-germany.webp";
import poland from "assets/images/partners-poland.webp";

export const partnersData = (t: TFunction) => [
  {
    image: austria,
    name: t("landing.partners.austria"),
    copy: t("landing.partners.austriaCopy"),
  },
  {
    image: germany,
    name: t("landing.partners.germany"),
    copy: t("landing.partners.germanyCopy"),
  },
  {
    image: poland,
    name: t("landing.partners.poland"),
    copy: t("landing.partners.polandCopy"),
  },
];
