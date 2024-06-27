import React, { useState, useEffect } from "react";
import "./article.css"

const Articles = () => {

    const [dataarticle, setDataArticle] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.artic.edu/api/v1/articles?limit=100`
            );
            if (!response.ok) {
              throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const jsonData = await response.json();
            setDataArticle(jsonData);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchData();
      }, []); 
    
    
     
      console.log(dataarticle);
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!dataarticle) {
        return <div>Loading Section Information .... </div>;
      }
    
    
      const randomArticles = dataarticle?.data?.slice(); 
      if (randomArticles?.length > 0) {
        randomArticles.sort(() => Math.random() - 0.5);
        randomArticles.length = 2; 
      }
    
    
    return (
        <div className="card">
        <span>Articles</span>
        {randomArticles?.map((article) => (
          <div key={article.id}>
              <div className="card-body">
              <a href={article.web_url}>
                    <h5>{article.title}</h5>
                    </a>
                    </div>
              </div>
        ))}
      </div>
    );
}

export default Articles;
