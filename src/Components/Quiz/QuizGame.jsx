import { useState } from "react";
import dataquestions from "./mockquizdata.json";
import QuestionQuiz from "./QuestionQuiz";
import Results from "./Results";
const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = dataquestions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion > dataquestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      quiz home page
      {showResult ? (
        <Results />
      ) : (
        <QuestionQuiz
        question={dataquestions[currentQuestion].question}
          options={dataquestions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default QuizGame;
