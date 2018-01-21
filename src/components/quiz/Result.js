import React from 'react';

const Result = (props) => {
  return (
    <div className="box">
      <h3 className="text-centered">Your result:</h3>
      <p className="result">{props.correctAnswers}/{props.questionTotal}</p>
    </div>
  );
}

export default Result;
