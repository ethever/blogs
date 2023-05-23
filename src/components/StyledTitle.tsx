import { Typography, styled } from "@mui/joy";

export const StyledTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  cursor: "pointer",
  width: "max-content",
  display: "flex",
  "&:after": {
    content: "'#'",
    opacity: 0,
  },
  "&:hover": {
    "&:after": {
      opacity: 1,
    },
  },
}));
