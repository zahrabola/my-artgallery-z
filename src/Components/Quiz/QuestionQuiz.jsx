import React from "react";

const QuestionQuiz = ({
  question,
  options,
  handleAnswer,
  type,
  inputType = "text",
  userInput = "",
  onUserInputChange,
  images,
}) => {
  let quizAnswer;

  if (type === "MCQ") {
    quizAnswer = (
      <div>
          <img src={images} alt="images" />
     
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      </div>
    );
  } else if (type === "FIB") {
    quizAnswer = (
      <div>
         <img src={images} alt="images" />
        <input
          type={inputType}
          value={userInput}
          onChange={(event) => onUserInputChange(event.target.value)}
        />
        <button onClick={() => handleAnswer(userInput)}>Submit Answer</button>
      </div>
    );
  } else if (type === "MCQ_EXH") {
    quizAnswer = (
      <div>
       <img src={images} alt="images" />
       <div>
          {options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>{question}</h2>
      <div>{quizAnswer}</div>
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
