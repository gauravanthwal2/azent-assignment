import React, { useState } from "react";
import "./Events.css";
import EventsNavbar from "../../components/events/eventsNav/EventsNavbar";
import EventsList from "../../components/events/eventsList/EventsList";

import allCountries from "../../data/counties.json";
import allEvents from "../../data/events.json";

const Event = () => {
  const [countries, setCountries] = useState(allCountries?.countries);
  const [events, setEvents] = useState(allEvents?.events);
  const [selectedCountry, setSelectedCountry] = useState(countries[0] || {});

  return (
    <>
      <div className="heading-container">
        <h1>Explore Our Events</h1>
      </div>
      <div className="events">
        <EventsNavbar
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          events={events}
        />
        <EventsList events={events} selectedCountry={selectedCountry} />
      </div>
    </>
  );
};

export default Event;
