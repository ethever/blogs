import { useTheme } from "@mui/joy";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Ethever.eth's blogs
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
