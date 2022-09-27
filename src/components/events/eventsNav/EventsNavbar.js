import React from "react";
import "./EventsNavbar.css";
import NavItems from "./NavItems";

const EventsNavbar = ({
  countries,
  selectedCountry,
  setSelectedCountry,
  events,
}) => {
  const countEvents = (country) => {
    const count = events.filter(
      (event) => event?.countryCode === country?.countryCode
    );
    return count.length;
  };
  return (
    <div className="events-nav">
      {countries &&
        countries.map((country) => (
          <NavItems
            key={country?.countryCode}
            country={country}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            eventCounts={countEvents(country)}
          />
        ))}
    </div>
  );
};

export default EventsNavbar;
