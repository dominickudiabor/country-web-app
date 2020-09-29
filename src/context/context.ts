import React from "react";

export const themes = {
  blue: {
    color: "Blue",
    code: "#0b69e4",
  },
  green: {
    color: "Green",
    code: "#0fabb6",
  },
  red: {
    color: "Red",
    code: "#e24141",
  },
  purple: {
    color: "Purple",
    code: "#aa069ce0",
  },
};

const ThemeContext = React.createContext({
  theme: themes.blue,
  switchTheme: (code: string) => {},
});

export default ThemeContext;
