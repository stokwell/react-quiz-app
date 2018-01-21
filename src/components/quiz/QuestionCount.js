import React from 'react';

const QuestionCount = (props) => {
  let counter = (total) => {
    let buttons = []
    for (let i = 0; i < total; i++){
      buttons.push(i)
    }
    return buttons
  }

  return (
    <div className="questionCount">
      {counter(props.total).map((el, index) =>
        <span className={index + 1 == props.counter ? ' counter question-active' : ' counter' }>{index + 1}</span>
      )}
    </div>
  );
}

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default QuestionCount;
