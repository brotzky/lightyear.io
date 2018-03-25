import { injectGlobal } from "styled-components";

export const fontFamily =
  "'Open Sans',-apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif";

export default {
  colors: {
    grey: "#f3f5f9",
    background: "#084aa3",
    input: "#505869",
    text: "#575061",
  },
  fontFamily,
  transitions: {
    easeIn: "cubic-bezier(0.47, 0, 0.745, 0.715)",
    easeOut: "cubic-bezier(0.39, 0.575, 0.565, 1)",
    easeInOut: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
  },
};

export const injectGlobalStyles = () => injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: #084aa3;
    padding: 0;
    margin: 0;
    font-family: ${fontFamily};
  }

  p {
    margin: 0;
    padding: 0;
  }
`;
