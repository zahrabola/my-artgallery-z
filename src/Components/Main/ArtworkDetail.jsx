///https://v5.reactrouter.com/web/api/match - match react router 

//https://api.artic.edu/api/v1/artworks/${id}
///artworks/{id}
//https://api.artic.edu/api/v1/artworks/${props.match.params.search} 

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const ArtworkDeatil = () => {


  const { id } = useParams() 


  const [artworkData, setArtworkData] = useState(null); // State to store artwork details
  const [error, setError] = useState(null); // State to store errors

  useEffect(() => {

    if (!id) return;
    
    const fetchArtworkDetails = async () => {
      const url = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,image_id`;
   
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch artwork details');
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
      <h2>{artworkData.data.title}</h2> {/* Display title */}
      <img src={artworkData.image_url} alt={artworkData.title} /> {/* Display image */}
      <p>Artist: {artworkData.data.artist_title}</p> {/* Display artist */}
     
    </div>
    </div>
    );
  };

export default ArtworkDeatil;
/* 
    fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
  .then(response => response.json()) 
  .then(data => {

    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching artwork data:', error);
  }); 




    const {id} = useParams

    const [detailData, setDetailData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true); // Set loading state
  
          const response = await fetch(`https://api.artic.edu/api/v1/artworks/129849`);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          const data = await response.json();
          setDetailData(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData(); // Call the function to fetch data when component mounts or id changes
    }, [id]); // Dependency array to re-fetch data when id changes
  
     return (
      <div>
      
        hello

        {isLoading && <p>Loading artwork details...</p>}
      {error && <p>Error: {error}</p>}
      {detailData && (
        <div>
          <h1>{detailData.data.title}</h1>
          <img src={detailData.data.image_url} alt={detailData.title} />
          <p>{detailData.data.artist_display}</p>
          {/* Add more details as needed based on the API response structure 
          </div>
        )}
        {!detailData && !isLoading && !error && (
          <p>No artwork found for ID: {id}.</p>
        )}
         
        </div>
      );
    };
  */