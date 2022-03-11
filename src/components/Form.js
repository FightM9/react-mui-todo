import React, { useState } from "react";

export default function Form({ addTodo }) {
  const [userInput, setUserInput] = useState('');

  function onFormSubmit(evt) {
    evt.preventDefault();
    if (!userInput.trim()) return
    addTodo(userInput)
    setUserInput('')
  }

  function onChangeInput(evt) {
    setUserInput(evt.target.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input 
      onChange={onChangeInput} 
      value={userInput}
      type="text" 
      placeholder="Add new" 
      />
      <button type="submit">Send</button>
    </form>
  );
}
