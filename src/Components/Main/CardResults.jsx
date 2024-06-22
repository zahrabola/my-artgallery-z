import React from "react";

const CardResults = ({ artitem }) => {
  return (
    <div>
      <img
        src={`https://www.artic.edu/iiif/2/${artitem.image_id}/full/843,/0/default.jpg`}
        alt="imagephoto"
      ></img>
      {artitem.title} - {artitem.artist_title} - {artitem.date_display}
    </div>
  );
};

export default CardResults;
