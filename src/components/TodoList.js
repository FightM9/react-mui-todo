import React from "react";
import TodoItem from "./TodoListItem";

export default function TodoList({ Todo, todos }) {
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            Todo={Todo}
            key={todo.id}
            id={todo.id}
            title={todo.title}
            complete={todo.complete}
          />
        ))}
    </ul>
  );
}
