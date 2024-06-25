import React from 'react';

const Results = ({score, totalQuestions }) => {
    const percentage = (score / totalQuestions) * 100;
    
    return (
        <div className='quiz-container'>
         <div className="question"><h2 >Quiz Result</h2> </div>  
            <p>You scored {score} out of {totalQuestions} questions.</p>
            <p>Your percentage: {percentage.toFixed(2)}%</p>
        </div>
    );
}

export default Results;
