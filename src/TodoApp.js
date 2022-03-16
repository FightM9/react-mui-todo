import React, { useReducer, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import { openModalInput } from "./components/modal";
import TodoList from "./components/TodoList";
import FakeData from "./utils/fakeData";
import TodoTabs from "./components/TodoTabs";
import { Context } from "./utils/context";
import reducer, { actionType } from "./utils/reduser";

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


  // const editTodo = (id) => {
  //   const oldTitle = getTodoById(id).title;
  //   const newTitle = openModalInput(oldTitle);
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, title: newTitle } : { ...todo }
  //     )
  //   );
  // };

  return (
    <Context.Provider value={{ dispatch }}>
      <div>
        <AddTodoForm/>
        <TodoTabs value={tab} setValue={setTab} />
        <TodoList todos={getActiveTodoList()} />
      </div>
    </Context.Provider>
  );
}
