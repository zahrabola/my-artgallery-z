import React from 'react';
import CardResults from './CardResults';
import "./main.css"

const SearchResult = ({data}) => {

    if (!data.length) {
        return <h2 className="noresults"> No Results Found</h2>;
      }
    return (
        <div className='results'>
          {data.map((artitem, i) => (
            <div key={i}>
            <CardResults artitem={artitem} />
            </div>
          ))}
        </div>
    );
}

export default SearchResult;
