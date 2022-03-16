import React, { useContext, useState } from "react";
import { Context } from "../utils/context";

export default function TodoItem({id, title, complete}) {
  const {editTodo, removeTodo, toggleTodo} = useContext(Context);

  return (
    <li>
      <label>
        <input onChange={() => toggleTodo(id)} type="checkbox" checked={complete}/>
        <span></span>
        {title} 
      </label>
      <span>
        <button onClick={() => editTodo(id)}>R</button>
        <button onClick={() => removeTodo(id)}>D</button>
      </span>
    </li>
  );
}
