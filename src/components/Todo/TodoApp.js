import React, { useReducer, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoTabs from "./TodoTabs";
import TodoList from "./TodoList";
import FakeData from "../../utils/fakeData";
import { Context } from "../../utils/context";
import reducer from "../../utils/reduser";
import Card from "@mui/material/Card";
import { Divider, Stack } from "@mui/material";

export default function TodoApp() {
  // Current todoList data
  const [todos, dispatch] = useReducer(reducer, FakeData);
  // Active tab index
  const [tab, setTab] = useState(0);

  // Returns a filtered todoList (as per tab index)
  const getFilteredTodos = function () {
    switch (tab) {
      case 1:
        // Show completed todos
        return todos.filter((todo) => todo.complete === false);
      case 2:
        // Show pending todos
        return todos.filter((todo) => todo.complete === true);
      default:
        // Show all todos
        return todos;
    }
  };

  return (
    <Context.Provider value={{ dispatch }}>
      <Stack sx={{ p: "40px 0" }} spacing={2}>
        <Card variant="outlined">
          <AddTodoForm />
        </Card>
        <Card variant="outlined">
          <TodoTabs tab={tab} setTab={setTab} />
          <Divider />
          <TodoList todos={getFilteredTodos()} />
        </Card>
      </Stack>
    </Context.Provider>
  );
}
