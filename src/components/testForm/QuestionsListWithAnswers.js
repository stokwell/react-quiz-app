import React, { Component } from 'react';

class QuestionsListWithAnswers extends Component {
  render() {
    return (
      <div onClick={this.props.goBack}>
        <h3>{this.props.question.body} </h3>
        <ul>
          { this.props.question.answers.map((answer) =>
              <li key={answer.id}>
                {answer.body}
              </li>
          )}
        </ul>
      </div>
    );
  }
}

export default QuestionsListWithAnswers;
