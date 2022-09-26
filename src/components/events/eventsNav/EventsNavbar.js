import React from "react";
import "./EventsNavbar.css";
import NavItems from "./NavItems";

const EventsNavbar = ({ countries }) => {
  return (
    <div className="events-nav">
      {countries &&
        countries.map((country) => (
          <NavItems key={country?.countryCode} country={country} />
        ))}
    </div>
  );
};

export default EventsNavbar;
