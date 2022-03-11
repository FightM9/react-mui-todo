import React, { useState } from "react";
import Form from "./components/Form";
import { openModalInput } from "./components/modal";
import TodoList from "./components/TodoList";
import FakeData from "./utils/fakeData";

export default function TodoApp() {
  const [todos, setTodos] = useState(FakeData);
  console.log(todos);

  const createNewTodo = (title) => {
    return {
      id: Math.random().toString(36).substring(2, 6),
      title: title,
      complete: false,
    };
  };

  const addTodo = (title) => setTodos([...todos, createNewTodo(title)]);

  const editTodo = (id, title) => {
    console.log(id, title)
    const newTitle = openModalInput(title);
    console.log(id, newTitle)
    // setTodos(
    //     todos.map((todo) => {
    //       if (todo.id === id) {
    //         todo.title = newTitle;
    //       }
    //     })
    //   );

  }


  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleTodoStatus = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    );

  return (
    <div>
      <Form addTodo={addTodo} />
      <TodoList
        // Object with functions for update TodoApp
        Todo={{ editTodo, removeTodo, toggleTodoStatus }}
        // Array of TodoApp item
        todos={todos}
      />
    </div>
  );
}
