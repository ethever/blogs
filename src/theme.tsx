import { experimental_extendTheme as materialExtendTheme } from "@mui/material/styles";
import { extendTheme } from "@mui/joy/styles";

export const materialTheme = materialExtendTheme();

declare module "@mui/joy/styles" {
  // interface ColorPalettePropOverrides {
  //   // apply to all Joy UI components that support `color` prop
  //   code: true;
  // }

  interface Palette {
    primary: {
      appBarBg: string;
      appBarBgActived: string;
      inlineCode: string;
      blockquoteBorder: string;
      blockquoteBorderColor: string;
    };
    background: {
      main: string;
    };
  }
}

export const chakraTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          appBarBg: "transparent",
          appBarBgActived: "transparent",
          blockquoteBorderColor: "brown",
          blockquoteBorder: "5px solid brown",
          inlineCode: "#0c111b",
        },
        background: {
          main: "tranparent",
        },
      },
    },
    light: {
      palette: {
        primary: {
          appBarBg: "transparent",
          appBarBgActived: "transparent",
          blockquoteBorderColor: "red",
          blockquoteBorder: "5px solid brown",
          inlineCode: "#0c111b",
          solidBg: "#319795",
          solidHoverBg: "#2C7A7B",
          solidActiveBg: "#285E61",
          outlinedColor: "#2C7A7B",
          outlinedBorder: "#2C7A7B",
          outlinedHoverBorder: undefined,
          outlinedHoverBg: "#E6FFFA",
          outlinedActiveBg: "#B2F5EA",
        },
        focusVisible: "rgba(66, 153, 225, 0.6)",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 730,
      lg: 1000,
      xl: 1200,
    },
  },
  focus: {
    default: {
      outlineWidth: "3px",
    },
  },
  fontFamily: {},
  components: {
    JoyTypography: {
      defaultProps: {
        fontFamily: "Nanum Gothic",
      },
    },
  },
});
