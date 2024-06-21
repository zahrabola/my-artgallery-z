import React from 'react';
import "./Quizhome.css";
import { Link } from "react-router-dom"; 
const QuizHome = () => {
    return (
        <div>
               <div className="quizhome">
        <h1 className="QuizHome-Title">
         Quiz <br />
          Art Gallery
        </h1>
        <div className="QuizHome-container">
          <p>Welcome to <span>Quiz Art Gallery</span></p>
          {/*<p>Use the search bar to start finding artworks to view. </p>
          <p>Click on an artwork to learn more.</p>
           <Link
              to={`/gallery`}
              className="image"
        ><div className="btn">Let's see some art!</div></Link> */
          }
            <Link
          to="/quiz"
          className="aquizGameBtn"
          style={{ textDecoration: "none" }}
        >
          <div className="btnquiz">Quiz Game &rarr; </div>
        </Link>
        </div>
      </div>
        </div>
    );
}

export default QuizHome;
