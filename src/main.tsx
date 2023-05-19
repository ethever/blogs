import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import { chakraTheme, materialTheme } from "./theme.tsx";
import { CssBaseline } from "@mui/joy";
import "./i18n.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider theme={chakraTheme}>
        <CssBaseline />
        <App />
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  </React.StrictMode>
);
