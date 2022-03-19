import { createTheme } from "@mui/material/styles";

/**
 * @const {Object}
 * Dark mode in MUI theme
 */

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#007aff",
    },
    background: {
      paper: "#192029",
      default: "#13181f"
    }
  },
});

/**
 * @const {Object}
 * Light mode in MUI theme
 */

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5569ff",
    },
    background: {
      paper: "#ffffff",
      default: "#dfe3e9"
    }
  },
});

/**
 * Light and dark theme for MUI
 */

const theme = {dark, light}

export default theme;
