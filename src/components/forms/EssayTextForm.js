import React from "react";
import { Form, Field } from "formik";
import { Textarea } from "../";

const EssayTextForm = () => (
  <Form>
    <Field name="essayText" component={Textarea} />
  </Form>
);

export default EssayTextForm;
