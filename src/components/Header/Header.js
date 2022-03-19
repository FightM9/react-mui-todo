import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function Header({ theme }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          bgcolor: "background.paper",
          backgroundImage: "none",
          boxShadow: 0,
        }}
        color="default"
        position="sticky"
      >
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              Todoist
            </Typography>
            <ToggleThemeButton theme={theme} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
