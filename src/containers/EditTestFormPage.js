import React, { Component } from 'react';
import { connect } from 'react-redux';


import QuestionsList from '../components/testForm/QuestionsList';
import QuestionForm from '../components/testForm/QuestionForm';
import TestInfo from '../components/testForm/TestInfo';

import { fetchTest} from '../actions/testActions';
import { addQuestion, deleteQuestion } from '../actions/questionActrions';


class EditTestFormPage extends Component {

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchTest(this.props.match.params.id)
    }
  }

  submit = (values) => {
    const test_id = this.props.match.params.id
    const question = { ...values, test_id: test_id}
    console.log(question)
    this.props.addQuestion(question, test_id)
  }

  deleteQuestion = () => {
    this.props.deleteQuestion()
  }

  render() {
    const test  = this.props.test
    const test_id = this.props.match.params.id

    return (
      <div className="container center">
        <TestInfo test={test}/>
        <QuestionsList test={test} deleteQuestion={this.deleteQuestion}/>
        <QuestionForm test_id={test_id} onSubmit={this.submit}/>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    test: state.tests.currentTest
  }
}


export default connect(mapStateToProps, { fetchTest, addQuestion, deleteQuestion })(EditTestFormPage);