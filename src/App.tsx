import React, { useState } from "react";

import Routes from "./Routes";
import ThemeContext, { themes } from "./context/context";
import { Themes } from "./types";

export default function App() {
  const [context, setContext] = useState({
    theme: themes.blue,
    switchTheme: (code: string) => {
      setContext((current) => ({
        ...current,
        theme: switchThemes(code, themes),
      }));
    },
  });

  const switchThemes = (code: string, themes: Themes) => {
    switch (code) {
    case themes.blue.code:
      return themes.blue;
    case themes.green.code:
      return themes.green;
    case themes.purple.code:
      return themes.purple;
    case themes.red.code:
      return themes.red;

    default:
      return themes.blue;
    }
  };

  return (
    <>
      <ThemeContext.Provider value={context}>
        <Routes />
      </ThemeContext.Provider>
    </>
  );
}
