import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Open Sans",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      // "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  // palette: {
  //   primary: {
  //     main: "#556cd6",
  //   },
  //   secondary: {
  //     main: "#19857b",
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  //   background: {
  //     default: "#fff",
  //   },
  // },
  palette: {
    primary: {
      main: "#5F5F5F",
    },
    secondary: {
      main: "#1587C0",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F7F7F7",
    },
  },
  overrides: {
    MuiStepLabel: {
      label: {
        fontSize: "1.5rem",
        fontWeight: 700,
        // color: "#1587C0",
      },
      active: {
        fontSize: "1.5rem",
        fontWeight: 700,
        color: "#1587C0",
      },
    },
  },
});

export default theme;
