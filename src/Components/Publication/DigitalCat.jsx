import React, { useState, useEffect } from "react";
import "./article.css"

//digital-catalogs

const DigitalCat = () => {

    const [datadigitalcat, setDigitalCat] = useState(null);
    const [error, setError] = useState(null);



    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.artic.edu/api/v1/digital-catalogs?limit=100`
            );
            if (!response.ok) {
              throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const jsonData = await response.json();
            setDigitalCat(jsonData);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchData();
      }, []); 
    
    
     
      console.log(datadigitalcat);
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!datadigitalcat) {
        return <div>Loading Section Information .... </div>;
      }
    
    
      const randomDigitalcatalogue = datadigitalcat?.data?.slice(); 
      if (randomDigitalcatalogue?.length > 0) {
        randomDigitalcatalogue.sort(() => Math.random() - 0.5);
        randomDigitalcatalogue.length = 2; 
      }
    
    return (

           <div className="card">
        <span>Digital Catalogue </span>
        {randomDigitalcatalogue?.map((catalogue) => (
          <div key={catalogue.id}>
              <div className="card-body">
              <a href={catalogue.web_url}>
                    <h5>{catalogue.title}</h5>
                    </a>
                    </div>
              </div>
        ))}
      </div>

    );
}

export default DigitalCat;
