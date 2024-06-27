import React, { useState, useEffect } from "react";
import "./article.css"

const Education = () => {

    const [dataeducation, setDataEducation] = useState(null);
    const [error, setError] = useState(null);
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.artic.edu/api/v1/educator-resources?limit=100`
          );
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
          }
          const jsonData = await response.json();
          setDataEducation(jsonData);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
    }, []); 
  
  
   
    console.log(dataeducation);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!dataeducation) {
      return <div>Loading Section Information .... </div>;
    }
  
  
    const randomEducations = dataeducation?.data?.slice(); 
    if (randomEducations?.length > 0) {
        randomEducations.sort(() => Math.random() - 0.5);
        randomEducations.length = 2; 
    }
  
    return (
        <div className="card">
        <span>Education</span>
        {randomEducations?.map((education) => (
          <div key={education.id}>
              <div className="card-body">
              <a href={education.web_url}>
                    <h5>{education.title}</h5>
                    </a>
                    </div>
              </div>
        ))}
      </div>
    );
}

export default Education;
