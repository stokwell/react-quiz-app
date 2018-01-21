import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from  'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchTest, updateTest, addTest } from '../../actions/testActions';

class TestForm extends Component {

  submit = (values) => {
    if(this.props.initialValues){
      const id = this.props.initialValues.id
      const test = { test: { title: values.title, category: values.category, description: values.description}}
      this.props.updateTest(id, test)
      this.props.closeEditForm()
    } else {
      this.props.addTest(values)
    }
  }

  render() {
    return (
      <div className="test-form-wrapper">
        <form onSubmit={ this.props.handleSubmit(this.submit) }>
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


const mapStateToProps = (state, props) =>{
  if(props.test){
    return {
      initialValues: state.tests.currentTest
    }
  }return null

}

export default connect(mapStateToProps, { fetchTest, updateTest, addTest } )(TestForm);
