import React from 'react';
import classNames  from 'classnames';


const AnswerOptions = (props) => {
  console.log(props.selectedAnswers)
  const showAnswer = props.showAnswer
  const showTrueAnswer = props.truth === true

  const showWrongAnswer = props.selectedAnswers.map((x) => {
    return x.id
  })

  var classes = classNames({
    'radioCustomLabel': true,
    'form-check-label': true,
    'right':  showTrueAnswer,
    'wrong': showWrongAnswer.includes(props.answerContent) && !showTrueAnswer
  } );

  if(!showAnswer) {
    return (
      <li className="answerOption form-check">
        <input
          type="checkbox"
          className="radioCustomButton"
          name="radioGroup"
          id={props.answerContent}
          value={props.answerType}
          onChange={props.onAnswerSelected}
          checked={props.answerType}
        />
        <label className="radioCustomLabel" for={props.answerContent}>
          {props.answerContent}
        </label>
      </li>
    );
  }
    return (
      <li className="answerOption form-check">
        <input
          type="checkbox"
          className={ showTrueAnswer ? 'form-check-input radioCustomButton' + 'white' : 'form-check-input radioCustomButton'}
          name="radioGroup"
          id={props.answerContent}
          value={props.answerType}
          onChange={props.onAnswerSelected}
        />
        <label className={ classes } htmlFor={props.answerContent}>
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
