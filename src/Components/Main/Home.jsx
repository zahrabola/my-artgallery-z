import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

////https://api.artic.edu/api/v1/exhibitions?limit=90 -  get image

const Home = () => {
  return (
    <div className="home">
      <h1 className="Home-Title">
        Virtual
        <br />
        Art Gallery
      </h1>
      <div className="Home-container">
        <p>
          Welcome to <span>Virtual Art Gallery</span>
        </p>
        {/*<p>Use the search bar to start finding artworks to view. </p>
          <p>Click on an artwork to learn more.</p> 
          */}
        <Link
          to="/gallery"
          className="artGalleryBtn"
          style={{ textDecoration: "none" }}
        >
          <div className="btnart">Art Gallery &rarr; </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
