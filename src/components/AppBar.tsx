import { Typography, useTheme } from "@mui/joy";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useColorScheme as useJoyColorScheme } from "@mui/joy/styles";
import { useColorScheme as useMaterialColorScheme } from "@mui/material/styles";
import React from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ModeToggle = () => {
  const { setMode: setMaterialMode } = useMaterialColorScheme();
  const { mode, setMode: setJoyMode } = useJoyColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    console.error({ mode });
  }, [mode]);
  if (!mounted) {
    // prevent server-side rendering mismatch
    // because `mode` is undefined on the server.
    return null;
  }
  return (
    <IconButton
      onClick={() => {
        setMaterialMode(mode === "dark" ? "light" : "dark");
        setJoyMode(mode === "dark" ? "light" : "dark");
      }}
    >
      {/** You can use `mode` from Joy UI or Material UI since they are synced **/}
      {mode === "dark" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default function DrawerAppBar() {
  const theme = useTheme();

  return (
    <AppBar
      component="nav"
      elevation={0}
      position="static"
      sx={{
        background: theme.vars.palette.primary.appBarBg,
      }}
    >
      <Toolbar
        sx={{
          [theme.breakpoints.up("md")]: {
            padding: "0 12px",
          },
        }}
      >
        <Typography
          level="h6"
          component="div"
          fontWeight="bold"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          ethever.eth's blogs
        </Typography>
        <ModeToggle />
      </Toolbar>
    </AppBar>
  );
}
