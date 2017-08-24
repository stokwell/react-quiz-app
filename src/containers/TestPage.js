import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTest} from '../actions/testActions';

import Test from '../components/quiz/Test';

class TestPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      quiz: null,
      loaded: false
    }
  }

  componentWillMount() {
    this.props.fetchTest(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps){
    this.setState({quiz: nextProps.quiz, loaded: true })
  }

  render() {
    const loading = this.state.loaded
    return (
      <div>
        { loading
          ? <Test quiz={ this.state.quiz }/>
          : <div> Loading </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    quiz: state.tests.currentTest,
    isLoaded: state.tests.isLoaded
  }
}

export default connect(mapStateToProps, {fetchTest})(TestPage)
