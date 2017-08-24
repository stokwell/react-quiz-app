import React from 'react';

const Result= (props) => {
  return (
    <div className="box">
      <p className="result">{props.correctAnswers}/{props.questionTotal}</p>
    </div>
  );
}

export default Result;
