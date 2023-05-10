"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


export default function Modal({selected,open,setOpen,eventType}) {
  const [textValue,setTextValue]=useState("");

  
  function handleAdd() {
    const title=textValue;
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.start,
        end: selected.end,
        allDay: selected.allDay,
        backgroundColor:"#10564f",
        borderColor:"#10564f"
      });
    }

    setOpen(false);
  }

  const handleRemove = () => {
    selected.event.remove();
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
       {(eventType==="addEvent")?(
        <>
         <DialogTitle sx={{color:"#10564f"}}>Calendar Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Event Title"
            type="text"
            fullWidth
            variant="standard"
            autoComplete="off"
            onChange={e =>setTextValue(e.target.value)}
            sx={{color:"#10564f",borderBlockColor:"#10564f",outlineColor:"#10564f",input:{color:"#10564f"},label:{color:"#10564f"},placeHolder:{color:"#10564f"}}}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{color:"#10564f"}} onClick={handleClose}>Cancel</Button>
          <Button sx={{color:"#10564f"}} onClick={handleAdd}>Add</Button>
        </DialogActions>
        </>
       ):(
        <>
         <DialogTitle>Do you want to remove the event <span className="font-semibold text-blue-400">{selected.event.title}</span> </DialogTitle>
        <DialogActions>
          <Button sx={{color:"#10564f"}} onClick={handleClose}>Cancel</Button>
          <Button sx={{color:"#10564f"}} onClick={handleRemove}>Delete</Button>
        </DialogActions>
        </>
       )}
      </Dialog>
    </div>
  );
}
