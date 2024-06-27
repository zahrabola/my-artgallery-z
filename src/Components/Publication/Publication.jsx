import React, { useState, useEffect } from "react";
import "./article.css"
const Publication = () => {
  const [datapublication, setDataPublication] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/publications?limit=100`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setDataPublication(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []); 


 
  console.log(datapublication);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!datapublication) {
    return <div>Loading Publication Information .... </div>;
  }


  const randomPublications = datapublication?.data?.slice(); 
  if (randomPublications?.length > 0) {
    randomPublications.sort(() => Math.random() - 0.5);
    randomPublications.length = 2; 
  }


  return (
    <div className="card">
      <span>Publications</span>
    { /* <h5>{datapublication.info.version}</h5> */}
      {randomPublications?.map((publication) => (
        <div key={publication.id}>
            <div className="card-body">
            <a href={publication.web_url}>
                  <h5>{publication.title}</h5>
                  </a>
                  </div>
            </div>
      ))}
    </div>
  );
};

export default Publication;
