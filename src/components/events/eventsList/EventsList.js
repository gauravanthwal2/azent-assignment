import React, { useEffect, useState } from "react";
import "./EventsList.css";
import Event from "./Event";

const EventsList = ({ events, selectedCountry }) => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const showEvents = events.filter(
      (event) => event.countryCode === selectedCountry.countryCode
    );
    setAllEvents(showEvents);
  }, [events, selectedCountry]);

  return (
    <div className="events-container">
      {allEvents.length > 0 ? (
        allEvents.map((event, index) => <Event key={index} event={event} />)
      ) : (
        <p className="no-event">There is no event...</p>
      )}
    </div>
  );
};

export default EventsList;
