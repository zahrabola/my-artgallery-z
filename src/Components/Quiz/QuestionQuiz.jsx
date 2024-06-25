import React from "react";
import "./game.css";
const QuestionQuiz = ({
  question,
  options,
  handleAnswer,
  type,
  inputType = "text",
  userInput = "",
  onUserInputChange,
  images,
  timeleft,
  currentQuestion,
  totalquestion
}) => {
  let quizQuestions;

  if (type === "MCQ") {
    quizQuestions = (
      <div className="image-container">
        <img src={images} alt="images" />

        <div className="option-container">
          {options.map((option, index) => (
            <button className="quizbtn" key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  } else if (type === "FIB") {
    quizQuestions = (
      <div className="image-container">
        <img src={images} alt="images" />
        <div>
          <input
            type={inputType}
            value={userInput}
            placeholder="artist..."
            onChange={(event) => onUserInputChange(event.target.value)}
          />
          <button  className="quizbtn" onClick={() => handleAnswer(userInput)}>Submit Answer</button>
        </div>
      </div>
    );
  } else if (type === "MCQ_EXH") {
    quizQuestions = (
      <div className="image-container">
        <img src={images} alt="images" />
        <div className="option-container">
          {options.map((option, index) => (
            <button className="quizbtn" key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="timer">Time Left: {timeleft} seconds</div>
      <div className="question-number">
                        Question {currentQuestion + 1}/
                        {totalquestion}
                    </div>
      <div className="question">
        <h2>{question}</h2>
      </div>
      <div>{quizQuestions}</div>
      {/*<div>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default QuestionQuiz;
