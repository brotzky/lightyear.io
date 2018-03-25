import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #fff;
  background: #00d57f;
  padding: 1.6rem 5.2rem;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background 300ms ${(props) => props.theme.transitions.easeOut};

  &:hover {
    background: #06c779;
  }
`;

const Button = ({ handleClick, type, text }) => {
  return (
    <PrimaryButton onClick={handleClick} type={type}>
      {text}
    </PrimaryButton>
  );
};

Button.defaultProptypes = {
  handleClick: () => {},
  type: "button",
};

Button.propTyps = {
  handleClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
