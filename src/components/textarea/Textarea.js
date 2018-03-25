import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 240px;
  margin-bottom: 3.4rem;
  padding: 1.4rem 1.2rem;
  line-height: 1.5;
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fontFamily}
  color: ${(props) => props.theme.colors.Textarea};
  background: #fff;
  border: none;
  border-radius: 3px;
  resize: none;

  &:active,
  &:focus {
    outline: none;
  }
`;

const Textarea = ({ field, label, ...props }) => (
  <StyledTextarea type="text" {...field} {...props} />
);

export default Textarea;
