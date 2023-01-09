import React from "react";
import { Button, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import classNames from "classnames";

import { FormTextField } from "../../components/client/form";
import { contactSchema, initialValues } from "./contact.constants";

import contactImage from "assets/images/contact.png";

import styles from "./contact.module.scss";

export const ContactPage = () => {
  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <img src={contactImage} alt="contact page" className={classNames(styles.image, styles.mobile)} />
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
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
