import { Nullable } from "types";
import { DEFAULT_LOCALE } from "../constants/app.constants";

type NullableObject = Nullable<Record<string, unknown>>;

export const isEmptyObject = (obj: NullableObject): boolean => {
  return Boolean(obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype);
};

export const mapLocale = (locale?: string | null) => {
  if (locale === "pl") return "pl-PL";
  return locale || DEFAULT_LOCALE;
};
