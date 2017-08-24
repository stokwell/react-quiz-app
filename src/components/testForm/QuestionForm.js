import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) =>
  <div className="margin-bottom">
    <label>
      {label}
    </label>
    <div>
      <input {...input} type={type} placeholder={placeholder} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>


const renderAnswers = ({fields }) =>
  <ul>
  <div className="title-with-button">
    <h3 className="undertitle">Add Answer Options</h3>
    <button type="button" onClick={() => fields.push()} className="btn btn-warning">
      Add answer
    </button>
  </div>
    {fields.map((answer, index) =>
    <li key={index} className="list-item relative">
      <button
        className="btn-close"
        type="button"
        title="Remove Answer"
        onClick={() => fields.remove(index)}
      >&times;</button>
      <h4 className="margin-bottom">{index + 1 } Answer</h4>

      <Field
        name={`${answer}.body`}
        type="text"
        component={renderField}
        label="Write an answer option in this field."
        placeholder="Answer"
      />
      <Field
        name={`${answer}.comment`}
        type="text"
        component={renderField}
        label="Add a comment for this answer. The user will see it, when he have answered a question."
        placeholder="Comment"
      />
      <Field
        name={`${answer}.right`}
        type="checkbox"
        component={renderField}
        label="Is this answer right? Check it, if it is a right answer."
      />
    </li>
    )}
  </ul>

class QuestionForm extends Component {
  render() {
    return (
      <div className="box">
        <h3 className="undertitle">New Question</h3>
        <form onSubmit={ this.props.handleSubmit }>
          <div className="form-group">
            <label htmlFor="body">Question</label>
            <Field name="body" component="input" type="text" placeholder="What is your question?"/>
          </div>
          <div className="form-group">
            <FieldArray name="answers" component={renderAnswers} />
          </div>
          <div className="form-group float-right">
            <button type="submit" className="btn btn-primary">Save Question</button>
          </div>
        </form>
      </div>
    );
  }
}

QuestionForm = reduxForm({
  form: 'question'
})(QuestionForm)


export default connect()(QuestionForm);
