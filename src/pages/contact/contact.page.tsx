import React from "react";
import { Button, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import classNames from "classnames";
import { useSubmit } from "@better-typed/react-hyper-fetch";

import { FormTextField } from "../../components/client/form";
import { contactSchema, initialValues } from "./contact.constants";
import { ContactData } from "./contact.types";
import { postContact } from "../../server/contact/contact.server";
import { createFromData } from "../../firebase/formData.firestore";
import { FormDataModel } from "../../models/formData.models";

import contactImage from "assets/images/contact.png";

import styles from "./contact.module.scss";

export const ContactPage = () => {
  const contactData = useSubmit(postContact);
  const { submit, onSubmitSuccess } = contactData;
  onSubmitSuccess(() => {});

  const handleSend = async (data: ContactData, formikHelpers: FormikHelpers<ContactData>) => {
    await submit({ data }).then((res) => {
      if (res[2] === 200) formikHelpers.resetForm();
    });

    const firebaseData: FormDataModel = {
      email: data.email,
      name: data.name,
      message: data.message,
      date: new Date().toISOString(),
    };

    await createFromData(firebaseData);

    await Promise.all([submit, createFromData]).then(() => {});
  };

  return (
    <div className={styles.container}>
      <img src={contactImage} alt="contact page" className={classNames(styles.image, styles.mobile)} />
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSend}
        validationSchema={contactSchema}
      >
        <Form className={styles.form}>
          <Typography>Contact us</Typography>

          <div className={styles.formData}>
            <FormTextField name="name" label="Name" />
            <FormTextField name="email" label="Email" />
            <FormTextField multiline name="message" label="Message" />
            <Button type="submit">Send</Button>
          </div>
        </Form>
      </Formik>

      <div className={styles.info}>
        <img src={contactImage} alt="contact page" className={classNames(styles.image, styles.desktop)} />
        <div className={styles.copy}>
          <Typography>Or contact us now!</Typography>
          <Typography>Set us a calendar for an online meeting or a phone call.</Typography>
        </div>

        <div className={styles.contactWrapper}>
          <div className={styles.contactItem}>
            <LocalPhoneOutlinedIcon className={styles.icon} />
            <Typography>+48 344 342 342</Typography>
          </div>
          <div className={styles.contactItem}>
            <EmailOutlinedIcon className={styles.icon} />
            <Typography>+48 344 342 342</Typography>
          </div>
          <div className={styles.contactItem}>
            <PlaceOutlinedIcon className={styles.icon} />
            <Typography>+48 344 342 342</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
