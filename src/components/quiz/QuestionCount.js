import React from 'react';

const QuestionCount = (props) => {
  return (
    <div className="questionCount">
      <p>{props.counter}/{props.total}</p>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default QuestionCount;
