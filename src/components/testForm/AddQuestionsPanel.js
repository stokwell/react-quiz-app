import React, { Component } from 'react';
import QuestionFrom from './QuestionForm';

class AddQuestionsPanel extends Component {
  render() {
    return (
      <div>
        <h2 className="undertitle"> Add new Question</h2>
        <div className="">
          <QuestionFrom />

        </div>
        <div className="">

        </div>
      </div>
    );
  }
}

export default AddQuestionsPanel;
