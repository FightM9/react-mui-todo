import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../utils/context";
import { actionType } from "../utils/reduser";

export default function AddTodoForm() {
  const [userInput, setUserInput] = useState('');
  const { dispatch } = useContext(Context)

  function onFormSubmit(evt) {
    evt.preventDefault();
    if (!userInput.trim()) return
    dispatch({
      type: actionType.ADD,
      payload: userInput,
    });
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
      <Button type="submit" variant="contained">Send</Button>
    </form>
  );
}
