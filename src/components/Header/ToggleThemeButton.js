import React from "react";
import { IconButton } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function ToggleThemeButton({ theme }) {
  const toggleThemeMode = () => theme.setDarkMode((prev) => !prev);

  return (
    <IconButton 
      aria-label="swith theme mode"
      color="primary"
      onClick={toggleThemeMode}
    >
      {theme.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
