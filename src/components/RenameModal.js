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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rename</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Rename item "{editableTodo.title}"
          </DialogContentText>
          <TextField
            inputRef={inputRef}
            autoFocus
            margin="dense"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={editableTodo.title}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRename}>Rename</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
