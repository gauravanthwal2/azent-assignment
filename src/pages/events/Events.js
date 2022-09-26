import React from "react";
import "./Events.css";
import EventsNavbar from "../../components/events/eventsNav/EventsNavbar";
import EventsList from "../../components/events/eventsList/EventsList";
import { useSelector } from "react-redux";

const Event = () => {
  const { countries } = useSelector((state) => state.countries);
  const { events } = useSelector((state) => state.events);

  return (
    <>
      <div className="heading-container">
        <h1>Explore Our Events</h1>
      </div>
      <div className="events">
        <EventsNavbar countries={countries} />
        <EventsList events={events} />
      </div>
    </>
  );
};

export default Event;
