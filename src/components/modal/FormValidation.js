import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './FormValidation.css';
import CountrySelector from "./CountrySelector";

const FormValidation = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    nationality: Yup.string().required(),
    phonenumber: Yup.string().required(),
    title: Yup.string().required(),
    message: Yup.string().required(),
  });

  const initialValues = {
    name: "",
    email: "",
    nationality: "",
    phonenumber: "",
    title: "",
    message: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const renderError = (message) => <p className="help is-danger">{message}</p>;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div className="container form">
          {/* for Full Name */}
          <div className="field">
            <div className="control">
              <Field
                name="name"
                type="text"
                className="input"
                placeholder="Full name"
              />
              <ErrorMessage name="name" render={renderError} />
            </div>
          </div>

          {/* for email */}

          <div className="field email">
            <div className="control">
              <Field
                name="email"
                type="text"
                className="input"
                placeholder="Email address"
              />
              <ErrorMessage name="email" render={renderError} />
            </div>
          </div>
          {/* for nationality */}
<div className="samerow d-flex justify-content-between">
          <div className="field col-lg-6">
            <div className="control nationality">
              {<CountrySelector/>}
              {/* <Field
                name="nationality"
                type="text"
                className="input"
                placeholder="Nationality"
              /> */}
              <ErrorMessage name="nationality" render={renderError} />
            </div>
          </div>
          {/* For Phone number */}
          <div className="field">
            <div className="control">
              <Field
                name="phonenumber"
                type="number"
                className="input"
                placeholder="Phone number"
              />
              <ErrorMessage name="phonenumber" render={renderError} />
            </div>
          </div>

          </div>
          {/* For Title */}
          <div className="field">
            <div className="control">
              <Field
                name="title"
                type="text"
                className="input"
                placeholder="How did you find the ace Himalaya?"
              />
              <ErrorMessage name="title" render={renderError} />
            </div>
          </div>

          {/* for message */}

          <div className="field">
            <div className="control">
              <Field
                name="message"
                type="text"
                className="input"
                placeholder="Message"
              />
              <ErrorMessage  name="message" render={renderError} />
            </div>
          </div>
          <div className="formvalidation-in-modal-btn">
          <button type="submit" className="button is-primary">
            Submit
          </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default FormValidation;
