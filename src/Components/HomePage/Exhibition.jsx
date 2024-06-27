import React from "react";
import "./exhibition.css";
const Exhibition = () => {
  return (
    <div className="exhibit">
      <h1 className="exhibit-title">
        Exhibition
        <br />
        Art Gallery
      </h1>
      <div className="exhibit-container">
        <p>
          Welcome to <span>Exhibition Art Gallery</span>
        </p>
    
          
        <a href="https://www.artic.edu/exhibitions" className="link-exhibit">
          <div className="btnart">Art Gallery &rarr; </div>
        </a>
      </div>
    </div>
  );
};

export default Exhibition;
