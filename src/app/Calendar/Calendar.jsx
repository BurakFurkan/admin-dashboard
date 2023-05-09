"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Notify from "./Modal";
import toast, { Toaster } from "react-hot-toast";
import { List, ListItem, ListItemText } from "@mui/material";

function Calendar() {
  const [events, setEvents] = useState([]);
  const [modalText,setModalText]=useState("")

  function openModal(selected){
    Notify(setModalText);
    setTimeout(handleDateClick(selected),1000)
  }

  function handleDateClick(selected) {
    const title = modalText;
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.start,
        end: selected.end,
        allDay: selected.allDay,
      });
    }
  }
  function handleEventClick() {}

  function handleChange() {}

  return (
    <div className="bg-white-300 ">
      <Toaster />
      <div>
        <h1>Events</h1>
        <List>
          {events.map((currentEvent) => {
            <ListItem key={currentEvent.id} sx={{}}>
              <ListItemText
                primary={currentEvent.title}
                secondary={formatDate(currentEvent.start, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              />
            </ListItem>;
          })}
        </List>
      </div>
      <FullCalendar
        height="80vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
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
        select={openModal}
        eventClick={handleEventClick}
        eventsSet={(events) => setEvents(events)}
        initialEvents={[{ id: "1111", title: "go run", date: "2023-05-05" }]}
      />
    </div>
  );
}

export default Calendar;
