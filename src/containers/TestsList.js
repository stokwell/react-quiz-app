import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTests } from '../actions/testActions';


import '../css/TestsList.css'

class TestsList extends Component {
  componentDidMount(){
    this.props.fetchTests();
  }

  render() {
    const tests = this.props.tests.tests
    const testsItems = tests.map((test) =>
      <li key={test.id} className="list-item">
        <h3>{test.title}</h3>
        <span>{test.category}</span>
        <Link to={`/test/${test.id}`} className="btn btn-primary">Open</Link>
        <Link to={`/test/${test.id}/edit`} className="btn">Edit</Link>
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

export default connect(mapStateToProps, { fetchTests })(TestsList);