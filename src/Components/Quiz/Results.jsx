import React from 'react';

const Results = ({score, totalQuestions, restartGame }) => {
    const percentage = (score / totalQuestions) * 100;
    
    return (
        <div className='quiz-container'>
         <div className="question"><h2 >Quiz Result</h2> </div>  
            <p>You scored {score} out of {totalQuestions} questions.</p>
            <p>Your percentage: {percentage.toFixed(2)}%</p>
            <button className='quizbtn' onClick={restartGame}>Restart Quiz</button>
        </div>
    );
}

export default Results;
