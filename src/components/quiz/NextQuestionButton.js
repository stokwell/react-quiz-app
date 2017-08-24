import React from 'react';

const NextQuestionButton = ({setNextQuestion}) => {
  return (
    <button className="btn btn-warning" onClick={setNextQuestion}>Next Question</button>
  );
}

export default NextQuestionButton;
