import React, { useState } from "react";
import Form from "./components/Form";
import { openModalInput } from "./components/modal";
import TodoList from "./components/TodoList";
import FakeData from "./utils/fakeData";
import TodoTabs from "./components/TodoTabs";
import { Context } from "./utils/context";

export default function TodoApp() {
  const [todos, setTodos] = useState(FakeData);
  const [tab, setTab] = useState(1);

  const createNewTodo = (title) => {
    return {
      id: Math.random().toString(36).substring(2, 6),
      title: title,
      complete: false,
    };
  };

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
  const getTodoById = (id) => todos.find((todo) => todo.id === id);

  const getTodoIndexById = (id) => todos.findIndex((todo) => todo.id === id);

  const addTodo = (title) => setTodos([createNewTodo(title), ...todos]);

  const editTodo = (id) => {
    const oldTitle = getTodoById(id).title;
    const newTitle = openModalInput(oldTitle);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : { ...todo }
      )
    );
  };

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    );
    console.log(todos);
  };

  return (
    <Context.Provider value={{editTodo, removeTodo, toggleTodo}}>
      <div>
        <Form addTodo={addTodo} />
        <TodoTabs value={tab} setValue={setTab} />
        <TodoList
          // Object with functions for update TodoApp
          // Todo={{ editTodo, removeTodo, toggleTodo }}
          // Array of TodoApp item
          todos={getActiveTodoList()}
        />
      </div>
    </Context.Provider>
  );
}
