import React, { useState } from "react";
import TodoApp from "./components/Todo/TodoApp";
import Header from "./components/Header/Header";
import theme from "./utils/theme";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true); 

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>    
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Header theme={{setDarkMode, darkMode}}/>
        <Container maxWidth="md">
          <TodoApp />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
