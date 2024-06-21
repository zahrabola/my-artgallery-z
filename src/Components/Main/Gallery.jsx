import Sidebar from "./Sidebar";
import React, { useState, useEffect } from 'react';

//https://github.com/luthvirtue/react-airlines-test/blob/master/src/components/SearchBar.js 
//https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id,artist_title&limit=30
//https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,api_link,title,image_id,artist_title&limit=30


const Gallery = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState();

    useEffect(() => {
        fetch(`https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,api_link,title,image_id,artist_title&limit=30`)
          .then(response => response.json())
          .then((response) => {
            setData(response.data);
          })
          .catch(error => console.error(error));
      }, [search]);

      //console.log(data)

      function handleChange(event) {
        setSearch(event.target.value);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
      }
    

  return (
    <div>
      gallery
        <Sidebar handleChange={handleChange} handleSubmit={handleSubmit}/>
 
       {data.length > 0 && (
        <ul>
          {data.map((artwork) => (
            <li key={artwork.id}>
              {artwork.title} - {artwork.artist_title}
            </li>
          ))}
        </ul>
      )}




    </div>
  );
};

export default Gallery;
