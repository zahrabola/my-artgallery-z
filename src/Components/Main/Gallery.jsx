import SearchResult from "./SearchResult";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";

//https://github.com/luthvirtue/react-airlines-test/blob/master/src/components/SearchBar.js
//https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id,artist_title&limit=30
//https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,api_link,title,image_id,artist_title&limit=30
//https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id,style_id,date_display,artist_title&limit=60


const Gallery = () => {

  const searchTerms = [
    "Modern",
    "Picasso",
    "Contemporary",
    "Oil Painting",
    "Sculpture",
    "Impressionism",
    "Abstract",
    "Palette",
    "Canvas",
    "Watercolor",
    "Expressionism",
    "Palette Knife",
    "Cubism",
    "Easel",
    "Fresco",
    "Pop Art",
    "Graffiti",
    "Dadaism",
    "Surrealism",
    "Engraving",
    "Ink",
    "Chiaroscuro",
    "Monet",
    "Portraiture",
    "Gouache",
    "Calligraphy",
    "Art Nouveau",
    "Fauvism",
    "Pointillism",
    "Collage",
    "Renaissance",
    "Realism",
    "Still Life",
    "Bronze",
    "Marble",
    "Landscape",
    "Carving",
    "Mosaic",
    "Mural",
    "Van Gogh",
    "Abstract Expressionism",
    "Printmaking",
    "Pastel",
    "Sgraffito",
    "Installation",
    "Glaze",
    "Hue",
    "Mondrian",
    "Ceramics",
    "Varnish",
  ];

  const [search, setSearch] = useState(searchTerms[0]); // Set initial search term
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);



  function getResults(search) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id,artist_title&limit=30`;
  
    fetch(url)
      .then((response) => response.json()) 
      .then((response) => {
        // Handle successful response
        setData(response.data); 
      })
      .catch((error) => {
        // Handle errors
        setError(error); 
      });
  }
  useEffect(() => {
    getResults(search); 
  }, [search]);


  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    getResults(search);
  }

  return (
    <div>
      gallery
      {error && <p>Error: {error.message}</p>}
      <Sidebar
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      
       
      />
      <SearchResult data={data} />
    </div>
  );
};

export default Gallery;
