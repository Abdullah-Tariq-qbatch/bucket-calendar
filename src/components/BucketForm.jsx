import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";

const BucketForm = ({ addEvent }) => {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    start: "",
    end: "",
    // Other event properties you might need
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(eventDetails);
    setEventDetails({
      title: "",
      start: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Bucket Title"
            name="title"
            value={eventDetails.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            type="datetime-local"
            name="start"
            value={eventDetails.start}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          {/* Other form fields for event details */}
          <Button variant="contained" color="primary" type="submit">
            Add Event
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default BucketForm;
