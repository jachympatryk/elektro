import { object, SchemaOf, string } from "yup";
import { TFunction } from "i18next";

import { ContactData } from "./contact.types";

export const initialValues: ContactData = {
  name: "",
  email: "",
  message: "",
};
export const contactSchema = (t: TFunction): SchemaOf<ContactData> =>
  object().shape({
    name: string().required(t("contact.nameIsRequired") as string),
    email: string().required(t("contact.emailIsRequired") as string),
    message: string().required(t("contact.messageIsRequired") as string),
  });
