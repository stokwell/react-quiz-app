import React, { Component } from 'react';
import QuestionsListWithAnswers from './QuestionsListWithAnswers';

 class QuestionListItem extends Component {
  state = {
    showAnswers: false
  }

  showAnswers = () => {
    this.setState({showAnswers: true})
  }

  goBack = () => {
    this.setState({showAnswers: false })
  }

  render() {
    return (
      <div>
        { this.state.showAnswers ?
          <QuestionsListWithAnswers
            question={this.props.question}
            showAnswers={this.showAnswers}
            goBack={this.goBack}
          />

          : <h3 onClick={this.showAnswers}>{this.props.question.body}</h3>
        }
      </div>
    );
  }
}

export default QuestionListItem;