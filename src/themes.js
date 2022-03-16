import { createGlobalStyle } from "styled-components";

// Light Theme Config
export const lightTheme = {
  bg: "#f1f1f6",
  text: "#000000",
  backgroundText: "#DADCE0",
};

// Dark Theme Config
export const darkTheme = {
  bg: "#2c2c31",
  text: "#e1e2e2",
  backgroundText: "#474b4f",
};

// Replace primary and secondary colors

export const GlobalStyles = createGlobalStyle`

    :root {
      --primary: #f63b1a;
      --secondary:#34374a;
      --tertiary:#ff2079;
      --accent: #e92efb;
      --text : ${(props) => props.theme.text};
      --backgroundText : ${(props) => props.theme.backgroundText};
      --bg : ${(props) => props.theme.bg};
    }
    
    body {
        background-color : ${(props) => props.theme.bg};
        transition: all 0.25s linear;
    }

`;
