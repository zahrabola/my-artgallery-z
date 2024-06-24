import React from "react";

const QuestionQuiz = ({
  question,
  options,
  handleAnswer,
  type,
  inputType = "text",
  userInput = "",
  onUserInputChange,
}) => {
  let quizAnswer;

  if (type === "MCQ") {
    quizAnswer = (
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  } else if (type === "FIB") {
    quizAnswer = (
      <div>
        <input
          type={inputType}
          value={userInput}
          onChange={(event) => onUserInputChange(event.target.value)}
        />
        <button onClick={() => handleAnswer(userInput)}>Submit Answer</button>
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
