import React from "react";
import "./main.css";
///https://aic-api-react.netlify.app/

const CardResults = ({ artitem }) => {
  const dummyImageUrl = `https://dummyimage.com/600x400/000/fff&text=No+Image+Available`;
  
  const handleImgError = (event) => {
    event.target.src = dummyImageUrl; 
  };
  {/* */}

  
  
  return (
    <div className="card">
      {/* 
      <img
        src={`https://www.artic.edu/iiif/2/${artitem.image_id}/full/843,/0/default.jpg`}
        alt="imagephoto"
      ></img> */}

      <img
        src={
          artitem.image_id
            ? `https://www.artic.edu/iiif/2/${artitem.image_id}/full/843,/0/default.jpg`
            : dummyImageUrl
        }
        alt="imagephoto"
     onError={handleImgError }
      ></img>
      <div className="card-overlay">
        {artitem.title} - {artitem.artist_title}
      </div>
    </div>
  );
};

export default CardResults;

/*
{state.fname ? `${state.fname}` : <span> No Name input </span>} */
