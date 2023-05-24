import { Typography, styled } from "@mui/joy";

export const StyledTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  cursor: "pointer",
  width: "100%",
  wordBreak: "break-all",
  overflowWrap: "break-word",
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
