import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTests, deleteTest } from '../actions/testActions';


import '../css/TestsList.css'

class TestsList extends Component {
  componentDidMount(){
    this.props.fetchTests();
  }

  deleteTest = (e) => {
    const testId = e.target.id
    this.props.deleteTest(testId)
  }

  render() {
    const tests = this.props.tests.tests
    const testsItems = tests.map((test) =>
      <li key={test.id} className="list-item test-info">
        <div className="">
          <h3>{test.title}</h3>
          <span>{test.category}</span>
        </div>
        <div className="buttons-panel">
          <Link to={`/test/${test.id}`} className="btn btn-info">Open</Link>
          <Link to={`/test/${test.id}/edit`} className="btn btn-warning">Edit</Link>
          <button onClick={this.deleteTest} id={test.id} className="btn btn-danger">Delete</button>
        </div>
      </li>
    )
    return (
      <div className="tests container">
        <div className="tests-box">
          <div className="header">
            <h2>Tests</h2>
            <Link to="/new-test" className="btn btn-grey">New one</Link>
          </div>
          <div className="wrapper">
            <ul className="tests-list">
               {testsItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
  tests: state.tests
  }
}

export default connect(mapStateToProps, { fetchTests, deleteTest })(TestsList);