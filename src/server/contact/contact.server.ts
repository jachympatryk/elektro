import { contactBuilder } from "../builder";
import { ContactData } from "../../pages/contact/contact.types";

export const postContact = contactBuilder.createCommand<unknown, ContactData>()({
  method: "POST",
  endpoint: "/ly7pa1opxgj727y8xnsf8jtawtu2e5r6",
});
