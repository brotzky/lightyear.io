import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FIELDS_LIST } from "../../constants";

const PreviewContainer = styled.div`
  margin-bottom: 20rem;
`;

const PreviewText = styled.p`
  line-height: 1.5;
  font-size: 1.6rem;
`;

const PreviewTextNode = styled.span`
  padding-right: ${(props) => (props.isLastMadlib ? " 0px" : "0.6rem")};
`;

const Preview = ({ essay }) => {
  const hasNotStartedMadlib = Object.keys(essay).length === 0;

  if (hasNotStartedMadlib) {
    return null;
  }

  return (
    <PreviewContainer>
      <PreviewText>
        {FIELDS_LIST.map((field, index) => {
          const fieldName = essay[field[0]];
          const isLastMadlib = index === FIELDS_LIST.length - 1;

          if (fieldName) {
            return (
              <PreviewTextNode
                key={fieldName.string}
                isLastMadlib={isLastMadlib}
              >
                {fieldName.html}
              </PreviewTextNode>
            );
          }

          return null;
        })}
      </PreviewText>
    </PreviewContainer>
  );
};

Preview.propTypes = {
  essay: PropTypes.objectOf(PropTypes.object.isRequired),
};

export default Preview;
