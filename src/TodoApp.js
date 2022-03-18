import React, { useReducer, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import Card from "@mui/material/Card";
import TodoList from "./components/TodoList";
import FakeData from "./utils/fakeData";
import TodoTabs from "./components/TodoTabs";
import { Context } from "./utils/context";
import reducer, { actionType } from "./utils/reduser";
import { Divider, Stack } from "@mui/material";

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, FakeData);
  const [tab, setTab] = useState(0);

  const getActiveTodoList = function () {
    switch (tab) {
      case 1:
        return todos.filter((todo) => todo.complete === false);
      case 2:
        return todos.filter((todo) => todo.complete === true);
      default:
        return todos;
    }
  };

  return (
    <Context.Provider value={{ dispatch }}>
      <Stack spacing={2}>
        <Card variant="outlined">
          <AddTodoForm />
        </Card>
        <Card variant="outlined">
          <TodoTabs value={tab} setValue={setTab} />
          <Divider />
          <TodoList todos={getActiveTodoList()} />
        </Card>
      </Stack>
    </Context.Provider>
  );
}
