import React from 'react';

const ResultsButton = (props) => {
  return (
    <button className="next-question-button" onClick={props.setResults}>Results!</button>
  );
}

export default ResultsButton;