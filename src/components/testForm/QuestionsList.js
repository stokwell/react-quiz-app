import React, { Component } from 'react';

import QuestionsListItem from './QuestionListItem';


class QuestionsList extends Component {

  render() {
    console.log(this.state)
    if (this.props.test.questions) {
      return (
        <div>
          <div className="box">
            <ul>
            { this.props.test.questions.map((question) =>
              <li key={question.id} className="list-item" onClick={this.showAnswers}>
                <QuestionsListItem question={question} />
              </li>
              )
            }
            </ul>
          </div>
        </div>
      )
    }else return (
      <div className="grid">No content</div>
    )

  }
}

export default QuestionsList;
