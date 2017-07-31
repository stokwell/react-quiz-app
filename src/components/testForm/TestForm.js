import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'

class TestForm extends Component {
  render() {
    return (
      <div className="test-form-wrapper">
        <h2 className="undertitle">Create a Quiz</h2>
        <form onSubmit={ this.props.handleSubmit }>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field name="title" component="input" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <Field name="category" component="input" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field name="description" component="input" type="text" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary ">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

TestForm = reduxForm({
  form: 'test'
})(TestForm)

export default withRouter(TestForm);