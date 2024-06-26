import React, { useEffect, useState } from "react";
import "./Event.css";
const Events = () => {
  const [eventshop, setEventShop] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          "https://api.artic.edu/api/v1/events?limit=4"
        );
        const jsonShopData = await response.json();
        setEventShop(jsonShopData);
      } catch (error) {
        setError(error);
      }
    };

    fetchEventData();
  }, []);

  console.log(eventshop);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!eventshop) {
    return <div>Loading Event Information .... </div>;
  }
  return (
    <div className="events-container">
      <h1>Events</h1>
      {/*  <h1>{eventshop.info.version}</h1>
      <p>{eventshop.info.license_text}</p> */}
      <hr />
      <div  className="events-grid" >
        {eventshop.data.map((artevent) => (
          <div key={artevent.id} className="event-card" >
            <img src={artevent.image_url} alt={artevent.title} />
            <div  className="event-info" >
              <h3>{artevent.title}</h3>
              <p>{artevent.date_display}</p>
            </div>
     
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
