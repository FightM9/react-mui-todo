import { createTheme } from "@mui/material/styles";

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#007aff',
    },
    background: {
      paper: '#192029',
      default: '#13181f'
    }
  },
});

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#5569ff',
    },
    background: {
      paper: '#ffffffd1',
      default: '#dfe3e9'
    }
  },
});

const theme = {dark, light}

export default theme;
