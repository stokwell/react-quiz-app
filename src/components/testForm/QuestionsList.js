import React, { Component } from 'react';
import { connect } from 'react-redux';

import {deleteQuestion} from '../../actions/questionActrions'

import QuestionsListItem from './QuestionListItem';

class QuestionsList extends Component {


  deleteQuestion = (e) => {
    const questionId = e.target.id
    this.props.deleteQuestion(questionId)
  }

  render() {
    if (this.props.test.questions) {
      return (
        <div>
          <div className="box">
            <ul>
            { this.props.test.questions.length > 0

              ? this.props.test.questions.map((question) =>
              <li key={question.id} className="list-item" onClick={this.showAnswers}>
                <QuestionsListItem question={question} />
                <button onClick={this.deleteQuestion} id={question.id}>Delete</button>
              </li>)
              : <li>No questions yet. Add some question below.</li>
            }
            </ul>
          </div>
        </div>
      )
    }else return (
      <div className="box">No content</div>
    )

  }
}

export default connect(null, {deleteQuestion})(QuestionsList);
