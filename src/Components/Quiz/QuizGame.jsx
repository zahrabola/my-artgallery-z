import { useState } from "react";
import dataquestions from "./mockquizdata";
import QuestionQuiz from "./QuestionQuiz";
import Results from "./Results";
import Backbtn from "../Main/Backbtn";
const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleAnswer = (selectedOption) => {
    const currentQuestionData = dataquestions[currentQuestion];

    if (currentQuestionData.type === "MCQ") {
      // Multiple Choice Question
      const correctAnswer = dataquestions[currentQuestion].answer;
      if (selectedOption === correctAnswer) {
        setScore(score + 1);
      }
    } else if (currentQuestionData.type === "FIB") {
      // Fill-in-the-Blank Question
      const isCorrect = evaluateFIBAnswer(
        userInput,
        currentQuestionData.answer
      ); 
      if (isCorrect) {
        setScore(score + 1);
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < dataquestions.length) {
      setCurrentQuestion(nextQuestion);
      setUserInput("");
    } else {
      setShowResult(true);
    }
  };

  const evaluateFIBAnswer = (userInput, correctAnswer) => {
    return userInput.toLowerCase() === correctAnswer.toLowerCase();
  };

  return (
    <div>
           <Backbtn />
      {showResult ? (
        <Results score={score} totalQuestions={dataquestions.length} />
      ) : (
        <QuestionQuiz
          question={dataquestions[currentQuestion].question}
          options={dataquestions[currentQuestion].options}
          handleAnswer={handleAnswer}
          type={dataquestions[currentQuestion].type}
          inputType={dataquestions[currentQuestion].inputType}
          onUserInputChange={setUserInput}
          userInput={userInput}
        />
      )}
    </div>
  );
};

export default QuizGame;
