import { createGlobalStyle } from "styled-components";

// Light Theme Config
export const lightTheme = {
	bg: "#f1f1f6",
	text: "#000000",
	backgroundText: "#DADCE0",
	accent: "#1C1D23",
};

// Dark Theme Config
export const darkTheme = {
	bg: "#2c2c31",
	text: "#e1e2e2",
	backgroundText: "#474b4f",
	accent: "#F1F1F1",
};

// Replace primary and secondary colors

export const GlobalStyles = createGlobalStyle`

    :root {
      --primary: #f63b1a;
      --secondary:#34374a;
      --tertiary:#ff2079;
      --accent: ${(props) => props.theme.accent};
      --text : ${(props) => props.theme.text};
      --backgroundText : ${(props) => props.theme.backgroundText};
      --bg : ${(props) => props.theme.bg};
    }
    
    body {
        background-color : ${(props) => props.theme.bg};
        transition: all 0.25s linear;
    }

`;

// DarkTheme Gradient
// background: rgb(28,29,35);
// background: linear-gradient(90deg, rgba(28,29,35,1) 0%, rgba(49,54,62,1) 50%);

// LightTheme Gradient
// background: rgb(193,193,193);
// background: linear-gradient(90deg, rgba(193,193,193,1) 0%, rgba(241,241,241,1) 70%);
