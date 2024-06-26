
//https://api.artic.edu/api/v1/artworks/${id}
///artworks/{id}


import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import DetailBackBtn  from "./DetailBackBtn"
const ArtworkDeatil = () => {
  const { id } = useParams();
  const [artworkData, setArtworkData] = useState(null); // State to store artwork details
  const [error, setError] = useState(null); // State to store errors

  useEffect(() => {
    if (!id) return;

    const fetchArtworkDetails = async () => {
      const url = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,classification_title,date_display,artist_display,place_of_origin,dimensions_detail,dimensions,medium_display,category_titles,image_id`;
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
    <div className="artwork-detail">
        {console.log(artworkData)}
      <DetailBackBtn />
      <div className="artwork-detail">
      
        <h2>{artworkData.data.title}</h2>
        <img
          src={`https://www.artic.edu/iiif/2/${artworkData.data.image_id}/full/843,/0/default.jpg`}
          alt={artworkData.data.title}
          className="descriptionImage"
        ></img>
        {/* Display image */}
        <p>Artist: {artworkData.data.artist_title}</p>
        <p>Date: {artworkData.data.date_display}</p>
        <p>Artsist Info: {artworkData.data.artist_display}</p>
        <p>Location: {artworkData.data.place_of_origin}</p>
        <p>Classification: {artworkData.data.classification_title}</p>
        <p>Medium: {artworkData.data.medium_display}</p>
        <p>Category: {artworkData.data.category_titles}</p>
        <p>Dimension: {artworkData.data.dimensions} </p>
        {/* specific dimensions   H - {artworkData.data.dimensions_detail[0].height} - array */}
      </div>
    </div>
  );
};

export default ArtworkDeatil;
