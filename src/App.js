import React from "react";
import TodoApp from "./TodoApp";
import { Container } from "@mui/material";
import "./App.css";

export default function App() {
  return (
    <Container maxWidth="md">
      <TodoApp />
    </Container>
  );
}
