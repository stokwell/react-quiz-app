import React, { Component } from 'react';
import { connect } from 'react-redux';

import TestForm from '../components/testForm/TestForm';
import { addTest } from '../actions/testActions';

import '../css/edit-test.css'

class TestFormPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.test ? this.props.test.id : null,
      title: this.props.test ? this.props.test.title : '',
      done: false
    }
  }


  submit = (values) => {
    this.props.addTest(values)
  }

  componentDidUpdate() {
    this.props.history.push(`/test/${this.props.test.id}/edit`)

  }

  render() {
    console.log(this.props)
    return (
      <div className="test-form-page center">
        <div className="box">
          <TestForm onSubmit={this.submit}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    test: state.tests.currentTest,
  }
}

export default connect(mapStateToProps, { addTest })(TestFormPage);