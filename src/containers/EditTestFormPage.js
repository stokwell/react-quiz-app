import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


import QuestionsList from '../components/testForm/QuestionsList';
import QuestionForm from '../components/testForm/QuestionForm';
import TestInfo from '../components/testForm/TestInfo';


import { fetchTest} from '../actions/testActions';


class EditTestFormPage extends Component {

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchTest(this.props.match.params.id)
    }
  }

  render() {
    const test  = this.props.test
    const test_id = this.props.match.params.id

    return (
      <div className="container center">
        <TestInfo test={test}/>
        <QuestionsList test={test} />
        <QuestionForm test_id={test_id}/>
      </div>
    );
  }
}



function mapStateToProps(state){
  return {
    test: state.tests.currentTest
  }
}


export default connect(mapStateToProps, { fetchTest })(EditTestFormPage);