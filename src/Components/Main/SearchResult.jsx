import React from "react";
import CardResults from "./CardResults";
import "./main.css";
import { Link } from "react-router-dom";
const SearchResult = ({ data }) => {
  if (!data.length) {
    return <h2 className="noresults"> No Results Found</h2>;
  }
  return (
    <div className="results">
      {data.map((artitem, i) => (
        <Link to={`${artitem.id}`} className="id" key={i}>
          <div>
            <CardResults artitem={artitem} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
/*   <div>
            <button
              className={`favourite-button ${isFavourited(artitem.id) ? 'active' : ''}`}
              onClick={() => {
                isFavourited(artitem.id)
                  ? removeFromFavourites(artitem.id)
                  : addToFavourites(artitem.id);
              }}
            >
              {isFavourited(artitem.id) ? 'Remove from Favourites' : 'Add to Favourites'}
            </button>
            </div> */
