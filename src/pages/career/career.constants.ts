import { TFunction } from "i18next";

import Fitter from "assets/icons/fitter.svg";
import Electrician from "assets/icons/electrician.svg";
import Language from "assets/icons/language.svg";

export const careerData = (t: TFunction) => [
  {
    label: t("career.fitter"),
    content: t("career.fitterContent"),
    image: Fitter,
  },
  {
    label: t("career.electrician"),
    content: t("career.electricianContent"),
    image: Electrician,
  },
  {
    label: t("career.helperWithLanguage"),
    content: t("career.helperContent"),
    image: Language,
  },
];
