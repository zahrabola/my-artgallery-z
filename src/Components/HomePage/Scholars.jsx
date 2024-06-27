import React from "react";
import Publication from "../Publication/Publication";
import DigitalCat from "../Publication/DigitalCat";
import PrintedCat from "../Publication/PrintedCat";
import Section from "../Publication/Section";
import Articles from "../Publication/Articles";
import Education from "../Publication/Education";
import "../Publication/article.css"
//https://api.artic.edu/api/v1/digital-catalogs?limit=2
///https://api.artic.edu/api/v1/publications?limit=2
/// https://api.artic.edu/api/v1/sections?limit=2
//https://api.artic.edu/api/v1/articles?limit=2
//https://api.artic.edu/api/v1/educator-resources?limit=2
//https://api.artic.edu/api/v1/printed-catalogs?limit=2
//
const Scholars = () => {
    return (
      <div className="scholars">
          <h1>Scholars</h1>
          <hr />
       
        <div className="publications-grid">
          <Publication />
          <Section />
          <Articles />
     
 
          <DigitalCat />
          <PrintedCat />
          <Education />
        </div>
      </div>
    );
  };
  
export default Scholars;

/// Digital Catalogs - Digital Scholarly Catalogs #Publications - sections
