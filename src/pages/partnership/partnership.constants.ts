import { TFunction } from "i18next";

import contact from "assets/icons/partnership-contact.svg";
import calendar from "assets/icons/partnership-calendar.svg";
import planning from "assets/icons/partnership-planning.svg";
import work from "assets/icons/partnserhip-work.svg";

export const partnershipData = (t: TFunction) => [
  {
    image: contact,
    title: t("partnership.contactUs"),
    content: t("partnership.contactUsCopy"),
    button: t("partnership.contactUsButton"),
  },
  {
    image: calendar,
    title: t("partnership.setCalendar"),
    content: t("partnership.setCalendarCopy"),
    button: t("partnership.setCalendarButton"),
  },
  {
    image: planning,
    title: t("partnership.planning"),
    content: t("partnership.planningCopy"),
    button: t("partnership.planningButton"),
  },
  {
    image: work,
    title: t("partnership.work"),
    content: t("partnership.workCopy"),
  },
];
