import React, { Component } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { FIELDS_LIST } from "./constants";
import { getRandomEssayTemplate } from "./utils";
import {
  Button,
  EssayTextForm,
  Header,
  MadlibsForm,
  Preview,
} from "./components";

/**
 * buildInitiState()
 * This is a function becase we want to invoke a new template
 * generate when the user fires this.handleStartOverClick() by clicking
 * the "Start over" button.
 *
 * To keep the original template move getRandomEssayTemplate out
 */
const buildInitialState = () => ({
  template: getRandomEssayTemplate(FIELDS_LIST),
  essay: {},
  showCompletedMadlib: false,
});

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;
  border-radius: 4px;
  overflow: hidden;
  min-height: calc(100vh - 10rem);
`;

const AppSection = styled.section`
  flex: 1;
  background: ${(props) =>
    props.background === "light" ? "#fff" : props.theme.colors.grey};
  padding: 4rem;
`;

const AppTextarea = styled.div`
  max-width: 50%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

class App extends Component {
  state = buildInitialState();

  /**
   * buildMadlibPreview()
   * Captures the form input values on blur and constructs an essay
   * object with html and string values for previewing and editing
   */
  buildMadlibPreview = ({ target }) => {
    const { essay, template } = this.state;
    // initialize the variable with no values
    let newEssayValue = { [target.name]: undefined };

    // and if there's an input value, edit the newEssayValue
    if (target.value) {
      const string = template[target.name].replace("$answer", target.value);
      let html = template[target.name].split(/(\$answer+\b)/gi);

      /**
       * Need to create JSX to bold the input answers as generating a string
       * will not properly render the JSX value
       */
      for (let i = 1; i < html.length; i += 2) {
        html[i] = <strong key={target.name}>{target.value}</strong>;
      }

      newEssayValue = {
        [target.name]: {
          html,
          string,
        },
      };
    }

    this.setState({
      essay: Object.assign({}, essay, newEssayValue),
    });
  };

  hasCompletedMadlib() {
    return Object.values(this.state.essay).filter((val) => val).length === 6;
  }

  /**
   * buildEssayTextInitialValues()
   * When the user clicks "Edit" we take all the generated strings from our
   * state and construct a single String that is passed as initialValues
   * to the EssayTextForm
   */
  buildEssayTextInitialValues() {
    return {
      essayText: FIELDS_LIST.map(
        (field) => this.state.essay[field[0]].string,
      ).join(" "),
    };
  }

  /**
   * buildMadlibsInitialValues()
   * Required to to hide error message thrown by Formik
   * => https://github.com/jaredpalmer/formik/issues/28
   */
  buildMadlibsInitialValues() {
    return FIELDS_LIST.reduce(
      (acc, curr) => Object.assign({}, acc, { [curr[0]]: "" }),
      {},
    );
  }

  // Building a new initialState that will generate a new template
  handleStartOverClick = () => {
    this.setState(buildInitialState());
  };

  handleEditClick = () => {
    this.setState({ showCompletedMadlib: true });
  };

  // Filler function required to hide warnings from Formik
  handleSubmit(event) {
    return event.preventDefault();
  }

  render() {
    const { essay, showCompletedMadlib } = this.state;

    if (showCompletedMadlib) {
      return (
        <AppContainer>
          <AppSection>
            <AppTextarea>
              <Header text="Your essay text" />
              <Formik
                onSubmit={this.handleSubmit}
                initialValues={this.buildEssayTextInitialValues()}
                component={EssayTextForm}
              />
              <Button
                handleClick={this.handleStartOverClick}
                text="Start over"
              />
            </AppTextarea>
          </AppSection>
        </AppContainer>
      );
    }

    return (
      <AppContainer>
        <AppSection>
          <Header text="About me" />
          <Formik
            onSubmit={this.handleSubmit}
            initialValues={this.buildMadlibsInitialValues()}
            render={(props) => (
              <MadlibsForm
                buildMadlibPreview={this.buildMadlibPreview}
                {...props}
              />
            )}
          />
        </AppSection>
        <AppSection background="light">
          <Header text="Your essay text" />
          <Preview essay={essay} />
          {this.hasCompletedMadlib() && (
            <Button handleClick={this.handleEditClick} text="Edit" />
          )}
        </AppSection>
      </AppContainer>
    );
  }
}

export default App;
