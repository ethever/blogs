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

declare module "@mui/system" {
  interface BreakpointOverrides {
    xs1: true;
    xs2: true;
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
          outlinedHoverBg: "#E6FFFA",
          inlineCode: "#682929",
        },
        background: {
          main: "#0c111b",
        },
      },
    },
    light: {
      palette: {
        neutral: {
          // 800: "#ebebef",
        },
        primary: {
          appBarBg: "transparent",
          appBarBgActived: "transparent",
          blockquoteBorderColor: "red",
          blockquoteBorder: "5px solid brown",
          inlineCode: "#b9b9b9",
          solidBg: "#319795",
          solidHoverBg: "#2C7A7B",
          solidActiveBg: "#285E61",
          outlinedColor: "#2C7A7B",
          outlinedBorder: "#2C7A7B",
          outlinedHoverBorder: undefined,
          outlinedHoverBg: "#E6FFFA",
          outlinedActiveBg: "#B2F5EA",
        },
        background: {
          main: "#eee",
        },
        focusVisible: "rgba(66, 153, 225, 0.6)",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xs1: 200,
      xs2: 260,
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
