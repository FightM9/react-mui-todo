import React, { useState } from "react";
import Header from "./components/Header/Header";
import TodoApp from "./components/Todo/TodoApp";
import theme from "./utils/theme";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";

export default function App() {
  // Dark mode boolean status
  const [darkMode, setDarkMode] = useState(true); 

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>  
    <CssBaseline/> 
      <Box sx={{ minHeight: "100vh", minWidth: "475px", bgcolor: "background.default" }}>
        <Header theme={{setDarkMode, darkMode}}/>
        <Container maxWidth="md">
          <TodoApp />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
