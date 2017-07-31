import React, { Component } from 'react';
import TestForm from './TestForm';

class TestInfo extends Component {

  state = {
    editing: false
  }

  handleEdit = () => {
    this.setState({ editing: true })
  }

  render() {
    if (this.state.editing) {
      return (
        <div className="box">
          <TestForm />
        </div>
      )
    }
    return (
      <div>
        <div className="box test-info">
          <div>
            <h3>{this.props.test.title}</h3>
            <p>{this.props.test.description}</p>
          </div>
          <button onClick={this.handleEdit}className="btn btn-primary">Edit</button>
        </div>
      </div>
    );
  }
}

export default TestInfo;