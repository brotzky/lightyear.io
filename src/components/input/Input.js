import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 6rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.input};
  border: none;
  border-radius: 3px;
  padding: 1.4rem 1.2rem;

  &:active,
  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.input};
  border: none;
  margin-bottom: 1.6rem;
`;

const Input = ({ field, label, ...props }) => (
  <React.Fragment>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput type="text" {...field} {...props} />
  </React.Fragment>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
