import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function RenameModal({ editableTodo, onRename, open, setOpen }) {
  const inputRef = useRef();

  const handleClose = () => {
    setOpen(false);
  };

  const handleRename = () => {
    const newTitle = inputRef.current.value;
    if (!newTitle.trim()) return;
    onRename({ ...editableTodo, title: newTitle });
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle >Rename</DialogTitle>
        <DialogContent dividers >
          <DialogContentText>
           Enter a new title for the "{editableTodo.title}"
          </DialogContentText>
          <TextField
            inputRef={inputRef}
            autoFocus
            margin="normal"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={editableTodo.title}
            onKeyPress={(e) => {if (e.key === 'Enter') {handleRename()}}}
          />
        </DialogContent>
        <DialogActions>
          <Button size="small" variant="" onClick={handleClose} disableElevation >Cancel</Button>
          <Button size="small" variant="contained" onClick={handleRename} disableElevation >Rename</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
