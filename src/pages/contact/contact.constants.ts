import { object, SchemaOf, string } from "yup";

import { ContactData } from "./contact.types";

export const initialValues: ContactData = {
  name: "",
  email: "",
  message: "",
};
export const contactSchema = (): SchemaOf<ContactData> =>
  object().shape({
    name: string().required("name Is Required"),
    email: string().required("email Is Required"),
    message: string().required("message Is Required"),
  });
