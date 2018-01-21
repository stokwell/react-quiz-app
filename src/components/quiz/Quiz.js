import React from 'react';
import PropTypes from 'prop-types';

import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOptions from './AnswerOptions';
import NextQuestionButton from './NextQuestionButton';
import ResultsButton from './ResultsButton'
import SaveButton from './SaveButton'

const Quiz = (props) => {
  function renderAnswerOptions(key) {
    console.log(props)
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
        selectedAnswers={props.selectedAnswers}
      />
    );
  }
  return (
    <div>
      <div className="qiuz-header">
        <h2 className="">{props.test.title}</h2>
        <div>
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
         </div>
      </div>

      <div key={props.questionId} className="question-with-answers-box">
        <Question content={props.question} />
        <ul className="answerOptions">
          { props.answerOptions.map(renderAnswerOptions) }
        </ul>
        <div className="btn-wrapper">
          { props.next ? <NextQuestionButton setNextQuestion={props.setNextQuestion}/> : <SaveButton handleSaveAnswers={props.handleSaveAnswers} />}
          { props.end && <ResultsButton setResults={props.setResults}/> }
        </div>
      </div>
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
