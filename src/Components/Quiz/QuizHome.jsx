import React from 'react';
import "./Quizhome.css";
import { Link } from "react-router-dom"; 
///https://www.sporcle.com/games/MrSaturn64/things-in-the-art-institute-of-chicago
//https://www.geeksforgeeks.org/quiz-app-in-react-using-chatgpt/
 
const QuizHome = () => {
    return (
        <div>
               <div className="quizhome">
        <h1 className="QuizHome-Title">
         Quiz <br />
          Art Game
        </h1>
        <div className="QuizHome-container">
          <p>Welcome to <span>Quiz Art Game   </span></p>
        
            <Link
          to="/quiz"
          className="quizGameBtn"
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
