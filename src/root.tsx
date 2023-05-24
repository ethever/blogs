import { CssBaseline, GlobalStyles } from "@mui/joy";
import App from "./App.tsx";
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import { chakraTheme, materialTheme } from "./theme.tsx";
import React from "react";

export const Root = () => {
  return (
    <React.StrictMode>
      <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
        <JoyCssVarsProvider
          theme={chakraTheme}
          defaultColorScheme="dark"
          defaultMode="dark"
        >
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: {
                width: "100%",
                height: "100%",
              },
              html: {
                width: "100%",
                height: "100%",
                minHeight: "100vh",
              },
              "#root": {
                height: "100%",
                width: "100%",
              },
            }}
          />
          <App />
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
    </React.StrictMode>
  );
};
