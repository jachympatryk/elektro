import { TFunction } from "i18next";

import service1 from "assets/images/service1.jpg";
import service2 from "assets/images/service2.jpg";
import service3 from "assets/images/service3.jpg";

export const serviceData = (t: TFunction) => [
  {
    image: service1,
    label: t("service.connection"),
    content: t("service.connectionCopy"),
  },
  {
    image: service2,
    label: t("service.quality"),
    content: t("service.qualityCopy"),
  },
  {
    image: service3,
    label: t("service.production"),
    content: t("service.productionCopy"),
  },
];
