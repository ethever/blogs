import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DrawerAppBar() {
  return (
    <AppBar component="nav" elevation={0} position="sticky">
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
