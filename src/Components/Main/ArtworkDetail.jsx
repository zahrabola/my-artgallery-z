///https://v5.reactrouter.com/web/api/match - match react router

//https://api.artic.edu/api/v1/artworks/${id}
///artworks/{id}
//https://api.artic.edu/api/v1/artworks/${props.match.params.search}

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const ArtworkDeatil = () => {
  const { id } = useParams();
  const [artworkData, setArtworkData] = useState(null); // State to store artwork details
  const [error, setError] = useState(null); // State to store errors

  useEffect(() => {
    if (!id) return;

    const fetchArtworkDetails = async () => {
      const url = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,image_id`;
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
    return <p>Error: {error.message}</p>; // Display error message
  }

  if (!artworkData) {
    return <p>Loading artwork details...</p>; // Display loading message
  }
  return (
    <div className="artwork-detail">
      hello
      <div className="artwork-detail">
        {console.log(artworkData)}
        <h2>{artworkData.data.title}</h2> {/* Display title */}
        <img
          src={`https://www.artic.edu/iiif/2/${artworkData.data.image_id}/full/843,/0/default.jpg`}
          alt={artworkData.data.title}
          className="descriptionImage"
        ></img>
        {/* Display image */}
        <p>Artist: {artworkData.data.artist_title}</p> {/* Display artist */}
      </div>
    </div>
  );
};

export default ArtworkDeatil;
