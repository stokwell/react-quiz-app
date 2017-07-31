import React from 'react';
import classNames  from 'classnames';


const AnswerOptions = (props) => {
  const showAnswer = props.showAnswer
  const showTrueAnswer = props.truth === true

  var classes = classNames({
    'radioCustomLabel': true,
    'right':  showTrueAnswer,
    'wrong': props.answerContent === props.answer && !showTrueAnswer
  } );


  if(!showAnswer) {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerContent === props.answer}
          id={props.answerContent}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    );
  }
    return (
      <li className="answerOption">
        <input
          type="radio"
          className={ showTrueAnswer ? 'radioCustomButton' + 'white' : 'radioCustomButton'}
          name="radioGroup"
          checked={props.answerContent === props.answer}
          id={props.answerContent}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className={ classes} htmlFor={props.answerType}>
          {props.answerContent}
        </label>
        { props.answerContent === props.answer && <p>{props.comment}</p> }
      </li>
    )
  }



AnswerOptions.propTypes = {
  answerContent: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOptions;