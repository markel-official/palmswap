import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    cancel: true;
  }
}
// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1288,
      xl: 1536,
    },
  },
  palette: {
    background: {
      default: "#030303",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8568DB",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        containedPrimary: {
          transition: "0.5s",
          backgroundSize: "200% auto",
          backgroundImage:
            "linear-gradient(90deg,#9D7BE9 0%,#6F57D1 51%, #9D7BE9 100%)",
          ":hover": {
            backgroundPosition: "right center",
          },
        },
        containedSecondary: {
          backgroundColor: "#ffffff",
          boxShadow: "none",
          color: "#000000",
          ":hover": {
            background: "#ffffff80",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 300,
        },
      },
    },
  },
});
export default theme;
