import { useState } from "react";

import dataquestions from "./mockquizdata.json"
import QuestionQuiz from './QuestionQuiz';
const QuizGame = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedOption) => {
        const correctAnswer = dataquestions[currentQuestion].answer;
        if (selectedOption === correctAnswer) {
            setScore(score + 1)
        }


    }

    return (
        <div>
            quiz home page

           <QuestionQuiz  dataquestions={dataquestions[currentQuestion].question} />
        </div>
    );
}

export default QuizGame;
