import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PrimaryHeader = styled.h2`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.text};
  margin: 0 0 3.4rem 0;
  font-weight: 700;
`;

const Header = ({ text }) => <PrimaryHeader>{text}</PrimaryHeader>;

Header.propTyps = {
  text: PropTypes.string.isRequired,
};

export default Header;
