import React from 'react';

const ResultsButton = (props) => {
  return (
    <button className="btn btn-warning" onClick={props.setResults}>Results!</button>
  );
}

export default ResultsButton;
