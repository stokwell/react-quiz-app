import React from 'react';

const Result= (props) => {
  return (
    <div>
      <p className="result">{props.correctAnswers}/{props.questionTotal}</p>
    </div>
  );
}

export default Result;
