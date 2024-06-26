///https://v5.reactrouter.com/web/api/match - match react router 

//https://api.artic.edu/api/v1/artworks/${id}
///artworks/{id}


///import { useEffect, useState } from 'react';

//import { useParams } from 'react-router-dom';

const ArtworkDeatil = () => {
 
  return (
    <div className="artwork-detail">
      hello
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