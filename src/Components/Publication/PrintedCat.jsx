import React, { useState, useEffect } from "react";
import "./article.css"

const PrintedCat = () => {

    const [dataprintcat, setPintCat] = useState(null);
    const [error, setError] = useState(null);



    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.artic.edu/api/v1/printed-catalogs?limit=100`
            );
            if (!response.ok) {
              throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const jsonData = await response.json();
            setPintCat(jsonData);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchData();
      }, []); 
    
    
     
      console.log(dataprintcat);
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!dataprintcat) {
        return <div>Loading Section Information .... </div>;
      }
    
    
      const randomPrintedCatalogs = dataprintcat?.data?.slice(); 
      if (randomPrintedCatalogs?.length > 0) {
        randomPrintedCatalogs.sort(() => Math.random() - 0.5);
        randomPrintedCatalogs.length = 2; 
      }
    
    return (
        <div className="card">
        <span>Printed Catalogs </span>
        {randomPrintedCatalogs?.map((catalogs) => (
          <div key={catalogs.id}>
              <div className="card-body">
              <a href={catalogs.web_url}>
                    <h5>{catalogs.title}</h5>
                    </a>
                    </div>
              </div>
        ))}
      </div>
    );
}

export default PrintedCat;
