import React, { useContext, useState } from "react";
import RenameModal from "../RenameModal/RenameModal";
import { Context } from "../../utils/context";
import { actionType } from "../../utils/reduser";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

export default function TodoList({ todos }) {
  const { dispatch } = useContext(Context);
  const [openModal, setOpenModal] = useState(false);
  const [editableTodo, setEditableTodo] = useState({});

  const onEdit = (todo) => {
    setEditableTodo(todo);
    if (!editableTodo) return;
    setOpenModal(true);
  };

  const onRename = (todo) => {
    dispatch({
      type: actionType.EDIT,
      payload: todo.id,
      title: todo.title,
    });
  };

  const onRemove = (todo) => {
    dispatch({
      type: actionType.REMOVE,
      payload: todo.id,
    });
  };

  const onToggleCompletion = (todo) => {
    dispatch({
      type: actionType.TOGGLE,
      payload: todo.id,
    });
  };

  if (todos.length == 0) {
    return (
      <Box sx={{ p: "36px" }}>
        <Typography
          variant="subtitle2"
          align="center"
          gutterBottom
          component="div"
        >
          There are no tasks to show for now
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            disablePadding
            secondaryAction={
              <div>
                <IconButton  aria-label="rename task" size="small" onClick={() => onEdit(todo)}>
                  <ModeEditOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton  aria-label="delete task" size="small" onClick={() => onRemove(todo)}>
                  <DeleteOutlineOutlinedIcon fontSize="small" />
                </IconButton>
              </div>
            }
          >
            <ListItemButton
              // Padding before "Delete" and "Edit" buttons,
              // default 48px for only one button 
              sx={{ pr: "78px !important" }}
              onClick={() => onToggleCompletion(todo)}
            >
              <Checkbox edge="start" checked={todo.complete} disableRipple />
              <ListItemText
                sx={{ wordBreak: "break-all" }}
                primary={todo.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <RenameModal
        editableTodo={editableTodo}
        onRename={onRename}
        open={openModal}
        setOpen={setOpenModal}
      />
    </>
  );
}
