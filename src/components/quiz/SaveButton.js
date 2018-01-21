import React from 'react';

const SaveButton = (props) => {
  return (
    <button className="btn btn-warning" onClick={props.handleSaveAnswers}>Ready</button>
  );
}

export default SaveButton;
