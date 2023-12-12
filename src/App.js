import Calendar from "./components/Calendar";
import BucketForm from "./components/BucketForm";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  const handleEventAdd = (newEvent) => {
    console.log(newEvent);
    setEvents([...events, newEvent]);
  };

  return (
    <div className="App">
      <BucketForm addEvent={handleEventAdd} />
      <Calendar events={events} />
    </div>
  );
}

export default App;
