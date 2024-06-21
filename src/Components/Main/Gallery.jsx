import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Gallery = () => {
  const [searchterm, setSearchTerm] = useState("");
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  fetch("https://api.artic.edu/api/v1/artworks/search?q=monet")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching artworks:", error);
    });

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      gallery
      <Sidebar handleSubmit={handleSubmit} />
      details results
    </div>
  );
};

export default Gallery;
