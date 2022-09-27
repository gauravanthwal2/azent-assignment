import React from "react";

const Event = ({ event }) => {
  return (
    <div className="event">
      <div className="image-container">
        <img src={event.image} alt="" />
      </div>
      <div className="event-info">
        <h3>{event.title} - {event.countryName}</h3>
        <p className="date">{event.date}</p>
        <p className="plateform">{event.platform} | {event.time}</p>
      </div>
      <div className="event-register">
        <button>Register now</button>
      </div>
    </div>
  );
};

export default Event;
