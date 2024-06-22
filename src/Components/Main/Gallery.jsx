import SearchResult from "./SearchResult";
import Sidebar from "./Sidebar";
import React from "react";

//https://github.com/luthvirtue/react-airlines-test/blob/master/src/components/SearchBar.js
//https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id,artist_title&limit=30
//https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,api_link,title,image_id,artist_title&limit=30
//https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id,style_id,date_display,artist_title&limit=60


const Gallery = () => {



  return (
    <div>
      gallery
     
      <Sidebar
      
       
      />
      <SearchResult  />
    </div>
  );
};

export default Gallery;
