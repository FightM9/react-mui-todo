import React, { useState } from "react";

export default function TodoItem({ Todo, id, title, complete}) {
  const [completeStatus, setCompete] = useState(complete)

  const onClickCheckbox = (evt) => {
     console.log(evt.target.checked)
     setCompete(!complete)
     Todo.toggleTodo(id);
  } 

  return (
    <li>
      <label>
        <input onClick={onClickCheckbox} type="checkbox" defaultChecked={completeStatus}/>
        <span></span>
        {title} 
      </label>
      <span>
        <button onClick={() => Todo.editTodo(id)}>R</button>
        <button onClick={() => Todo.removeTodo(id)}>D</button>
      </span>
    </li>
  );
}
