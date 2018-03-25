import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import { FIELDS_LIST } from "../../constants";
import { Input } from "../";

const MadlibsForm = ({ buildMadlibPreview }) => {
  return (
    <Form>
      {FIELDS_LIST.map((field) => {
        const name = field[0];
        const label = field[1];

        return (
          <Field
            component={Input}
            key={name}
            label={label}
            name={name}
            onBlur={buildMadlibPreview}
          />
        );
      })}
    </Form>
  );
};

MadlibsForm.propTypes = {
  buildMadlibPreview: PropTypes.func.isRequired,
};

export default MadlibsForm;
