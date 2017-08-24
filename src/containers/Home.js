import React, { Component } from 'react';
import { fetchTests } from '../actions/testActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount(){
    this.props.fetchTests();
  }

  render() {
    const tests = this.props.tests.tests.map((test) =>
      <div key={test.id} className="test-box">
        <Link to={`/test/${test.id}`}>
          <img src={`http://localhost:3000/${test.cover.url}`} alt="cover"/>
          <h2>{test.title}</h2>
        </Link>
      </div>
    )
    return (
      <div className="tests-wrapper">
        {tests}
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {
    tests: state.tests
  }
}

export default connect(mapStateToProps, { fetchTests })(Home);
