import React from "react";
import "./main.css";
const CardResults = ({ artitem }) => {
  return (
    <div className="card">
      <img
        src={`https://www.artic.edu/iiif/2/${artitem.image_id}/full/843,/0/default.jpg`}
        alt="imagephoto"
      ></img>
      <div className="card-overlay">
        {artitem.title} - {artitem.artist_title} - {artitem.date_display}
      </div>
    </div>
  );
};

export default CardResults;
