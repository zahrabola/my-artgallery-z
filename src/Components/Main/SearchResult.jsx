import React from 'react';
import CardResults from './CardResults';

const SearchResult = ({data}) => {

    if (!data.length) {
        return <h2 className="noresults"> No Results Found</h2>;
      }
    return (
        <div>
          {data.map((artitem, i) => (
            <div key={i}>
            <CardResults artitem={artitem} />
            </div>
          ))}
        </div>
    );
}

export default SearchResult;
