import React, { useState, useEffect } from "react";
import "./article.css"


const Section = () => {
    const [datasection, setDataSection] = useState(null);
    const [error, setError] = useState(null);
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.artic.edu/api/v1/sections?limit=100`
          );
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
          }
          const jsonData = await response.json();
          setDataSection(jsonData);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
    }, []); 
  
  
   
    console.log(datasection);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!datasection) {
      return <div>Loading Section Information .... </div>;
    }
  
  
    const randomSections = datasection?.data?.slice(); 
    if (randomSections?.length > 0) {
        randomSections.sort(() => Math.random() - 0.5);
        randomSections.length = 2; 
    }
  
  
    return (
      <div className="card">
        <span>Sections</span>
        {randomSections?.map((sections) => (
          <div key={sections.id}>
              <div className="card-body">
              <a href={sections.web_url}>
                    <h5>{sections.title}</h5>
                    </a>
                    </div>
              </div>
        ))}
      </div>
    );
  };

export default Section;
