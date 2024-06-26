import React, { useState, useEffect } from "react";
import "./Archive.css";
///https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
///https://medium.com/@greennolgaa/mastering-asynchronous-data-handling-in-react-a-comprehensive-guide-using-fetch-and-axios-28f5bd9885e5

///https://kinsta.com/blog/react-conditional-render/
///https://api.artic.edu/api/v1/sites?page=4
///https://medium.com/@bobjunior542/implementing-pagination-in-reactjs-with-data-fetching-a-step-by-step-guide-84aaa26a473d
///https://api.artic.edu/api/v1/sites?limit=8&page=1
// https://github.com/zahrabola/my-gym-z-app/blob/master/src/Components/Exercise.js 
const Archive = () => {
  const [dataarchive, setDataArchive] = useState(null);
  const [error, setError] = useState(null);
  const [currentpage, setCurrentPage] = useState(1);
  const [itemsperpage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/sites?limit=${itemsperpage}&page=${currentpage}`
        );
        ///https://api.artic.edu/api/v1/sites?limit=8&page=1
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setDataArchive(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [currentpage, itemsperpage]);

  /*pagination */


  /* */

  console.log(dataarchive);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dataarchive) {
    return <div>Loading Archive Information .... </div>;
  }

  return (
    <div className="archive ">
      <h1>Archive</h1>
      <hr />
      <div className="archive-card-container">

 

        {/*  <h1>{dataarchive.info.version}</h1>
      <p>License: {dataarchive.info.license_text}</p> */}
        <ul className="archive-card-list">
          {dataarchive.data.map((site) => (
            <li key={site.id} className="archive-card">
              <h3>{site.title}</h3>
              {/* <p>descrption : {site.description} </p> */}
              <div>
                <p>
                  {site.description ? (
                    ` ${site.description}`
                  ) : (
                    <span>No description available, Please click link</span>
                  )}
                </p>
              </div>

              <a href={site.web_url}>View {site.title} </a>
            </li>
          ))}
        </ul>
      </div>
  <div>pagination</div>
      hello
   

    </div>
  );
};
export default Archive;
