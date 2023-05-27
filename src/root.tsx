import { CssBaseline, GlobalStyles } from "@mui/joy";
import App from "./App.tsx";
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import { chakraTheme, materialTheme } from "./theme.tsx";
import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";

export const Root = () => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
          <JoyCssVarsProvider
            theme={chakraTheme}
            // defaultColorScheme="dark"
            // defaultMode="dark"
          >
            <CssBaseline enableColorScheme />
            <GlobalStyles
              styles={{
                body: {
                  transition: "160ms",
                  width: "100%",
                  height: "100%",
                  overflowY: "scroll",
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
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
