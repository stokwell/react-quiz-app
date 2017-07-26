import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestForm from '../components/testForm/TestForm';
import AddQuestionsPanel from '../components/testForm/AddQuestionsPanel';

import { addTest, newTest } from '../actions/testActions';

class TestFormPage extends Component {

    state = {
      id: this.props.test ? this.props.test.id : null,
      title: this.props.test ? this.props.test.title : '',
      done: false
    }


  submit = (values) => {
    this.props.addTest(values)
  }

  componentDidUpdate() {
    this.props.history.push(`/test/${this.props.test.id}/edit`)

  }

  render() {
    return (
      <div className="test-form-page">
        <div className="box test-form-box">
          <TestForm onSubmit={this.submit}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    test: state.tests.currentTest,
    tests: state.tests
  }
}

export default connect(mapStateToProps, { addTest })(TestFormPage);