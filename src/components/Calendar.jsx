import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Container, Tooltip, Popover, Typography } from "@mui/material";

const Calendar = ({ events }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  function renderEventContent(eventInfo) {
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    console.log(eventInfo);
    return (
      <>
        <Box
          sx={{
            height: "20px",
            padding: "2px",
            bgcolor:
              eventInfo.isFuture && !eventInfo.isPast ? "#d1e8d4" : "#fffae2",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleClick}
        >
          <span>
            <img
              src="https://auctions.synetiq.co.uk/templates/domains/main/assets/img/synetiq-iaa.png"
              style={{ height: "15px" }}
              alt="asdsad"
            />{" "}
            {eventInfo.timeText} to 2:00a <b>+12</b>
          </span>
        </Box>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>Title: {eventInfo.event.title}</Typography>
        </Popover>
      </>
    );
  }
  return (
    <Container maxWidth="xl">
      <Box mt={4}>
        <Box p={2}>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            height="auto"
            eventContent={renderEventContent}
            editable={true} // Enable event dragging
            eventDrop={(info) => {
              // Handle event drop here, update event in the state or backend
              console.log(info.event);
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Calendar;
