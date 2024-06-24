import React from 'react';

const QuestionQuiz = ({question, options, handleAnswer}) => {
    return (
        <div>
         <h2>{question}</h2>
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

export default QuestionQuiz;
