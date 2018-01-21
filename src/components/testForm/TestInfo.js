import React, { Component } from 'react';
import TestForm from './TestForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class TestInfo extends Component {
  state = {
    editing: false
  }

  handleEdit = () => {
    this.setState({ editing: true })
  }

  closeEditForm = () => {
    this.setState({ editing: false})
  }

  render() {
    if (this.state.editing) {
      return (
        <div className="box">
          <TestForm test={this.props.test} closeEditForm={this.closeEditForm}/>
        </div>
      )
    }
    return (
      <div>
        <div className="box is-column">
          <div className="title-with-button">
            <h3 className="undertitle">Test</h3>
            <Link to={`/test/${this.props.test.id}`} className="btn btn-warning">Open</Link>
            <button onClick={this.handleEdit} className="btn btn-primary">Edit</button>
          </div>
          <div>
            <h4>{this.props.test.title}</h4>
            <p>{this.props.test.category}</p>
            <p>{this.props.test.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(TestInfo);
