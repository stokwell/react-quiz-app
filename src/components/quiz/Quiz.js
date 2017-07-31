import React from 'react';
import PropTypes from 'prop-types';

import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOptions from './AnswerOptions';
import NextQuestionButton from './NextQuestionButton';
import ResultsButton from './ResultsButton'




const Quiz = (props) => {
  function renderAnswerOptions(key) {
    return (
      <AnswerOptions
        key={key.id}
        answerContent={key.body}
        answerType={key.truth}
        comment={key.comment}
        truth={key.right}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        showAnswer={props.showAnswer}
      />
    );
  }

  return (
    <div>
      <div key={props.questionId}>
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="answerOptions">
          { props.answerOptions.map(renderAnswerOptions) }
        </ul>
      </div>
      { props.next && <NextQuestionButton setNextQuestion={props.setNextQuestion}/>}
      { props.end && <ResultsButton setResults={props.setResults}/> }


    </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};


export default Quiz;