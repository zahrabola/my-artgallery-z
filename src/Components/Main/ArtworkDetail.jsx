//https://api.artic.edu/api/v1/artworks/${id}
///artworks/{id}

import { useEffect, useState } from "react";
import "./main.css";
import { useParams } from "react-router-dom";
import DetailBackBtn from "./DetailBackBtn";

const ArtworkDeatil = () => {
  const { id } = useParams();
  const [artworkData, setArtworkData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (!id) return;

    const fetchArtworkDetails = async () => {
      const url = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,classification_title,date_display,artist_display,place_of_origin,dimensions_detail,dimensions,medium_display,category_titles,artist_display,department_title,image_id`;
      console.log(url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch artwork details");
        }
        const artworkData = await response.json();
        setArtworkData(artworkData);
      } catch (error) {
        setError(error);
      }
    };

    fetchArtworkDetails();
  }, [id]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!artworkData) {
    return <p>Loading artwork details...</p>;
  }
  return (
    <div className="artwork-container">
      {console.log(artworkData)}
      <DetailBackBtn />
      <div className="artwork-detail">
        <h2>{artworkData.data.title}</h2>
        <img
          src={`https://www.artic.edu/iiif/2/${artworkData.data.image_id}/full/843,/0/default.jpg`}
          alt={artworkData.data.title}
          className="descriptionImage"
        ></img>
    
        <div className="artwork-info">
          <p>
            <span>Artist:</span> {artworkData.data.artist_title}
          </p>
          <hr />
          <p>
            <span> Artist Information: </span> {artworkData.data.artist_display}
          </p>
          <hr />
          <p>
            <span>Place:</span> {artworkData.data.place_of_origin}
          </p>
          <hr />
          <p>
            {" "}
            <span>Date:</span> {artworkData.data.date_display}
          </p>
          <hr />
          <p>
            <span>Department: </span>
            {artworkData.data.department_title}
          </p>
          <hr />
          <p>
            <span>Classification:</span> {artworkData.data.classification_title}
          </p>
          <hr />
          <p>
            {" "}
            <span>Medium:</span> {artworkData.data.medium_display}
          </p>

          <hr />
          <p>
            <span> Category: </span>
            {artworkData.data.category_titles[0]}
          </p>
          <hr />
          <p><span>Dimension:</span> {artworkData.data.dimensions} </p>
          {/* specific dimensions   H - {artworkData.data.dimensions_detail[0].height} - array */}
        </div>
      </div>
{/*<div className="favourites">
      <div>recently viewed </div>
      </div> */}
      
    </div>
  );
};

export default ArtworkDeatil;
