"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Modal from "./Modal";
import { List, ListItem, ListItemText } from "@mui/material";

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();
  const [eventType, setEventType] = useState("addEvent");


  function handleDateClick(selected) {
    setEventType("addEvent")
    setSelected(selected);
    setOpen(true);
  }
  function handleEventClick(selected) {
    setEventType("deleteEvent")
    setSelected(selected);
    setOpen(true);
  }


  return (
    <div className="flex justify-center items-start flex-col md:flex-row gap-3 w-full ">
      <Modal selected={selected} open={open} setOpen={setOpen} eventType={eventType}/>
      <div className="flex-1 w-full flex flex-col justify-start items-center p-1 bg-white-300 shadow-md border-[1px] border-gray-400 ">
        <h1 className="text-base font-semibold ">Events</h1>
        <List className="max-h-[70vh] w-full overflow-x-scroll pr-1">
          {currentEvents.map((event) => (
            <ListItem 
            className="shadow-md"
            key={event._def.defId}
            sx={{
              backgroundColor: "#10564f",
              color:"#f7f9f5",
              marginBottom:"6px",
              borderRadius:"4px"
            }}
          >
            <ListItemText
              primary={event._def.title}
              secondary={formatDate(event._instance.range.start, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              secondaryTypographyProps={{
                fontSize: 13,
                color: '#aeafb0',
                paddingLeft:"6px"
              }}
            />
          </ListItem>
          ))}
        </List>
      </div>
      <div className=" relative flex-1 md:flex-[9]  bg-white-300 shadow-md border-[1px] border-gray-400 w-full">
        <FullCalendar
          height="80vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {
              id: "1111",
              title: "Meeting",
              date: "2023-05-05",
              backgroundColor: "#10564f",
              borderColor: "#10564f",
            },
            {
              id: "1112",
              title: "Lunch with clients",
              date: "2023-05-08",
              backgroundColor: "#10564f",
              borderColor: "#10564f",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Calendar;
