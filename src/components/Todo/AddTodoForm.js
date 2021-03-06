import React, { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { actionType } from "../../utils/reduser";
import { Box } from "@mui/system";
import { IconButton, InputBase } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddTodoForm() {
  const [userInput, setUserInput] = useState("");
  const { dispatch } = useContext(Context);

  function onFormSubmit(evt) {
    evt.preventDefault();
    if (!userInput.trim()) return;
    dispatch({
      type: actionType.ADD,
      payload: userInput,
    });
    setUserInput("");
  }

  function onChangeInput(evt) {
    setUserInput(evt.target.value);
  }

  return (
    <Box
      component="form"
      onSubmit={onFormSubmit}
      sx={{ p: "10px 10px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        onChange={onChangeInput}
        value={userInput}
        type="text"
        placeholder="Add new task"
      />
      <IconButton
        disabled={!userInput.trim()}
        sx={{ p: "10px" }}
        type="submit"
        aria-label="Add new Todo"
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
