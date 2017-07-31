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
    <li>
      <div className="new-answer-panel">
        <button type="button" onClick={() => fields.push()} className="btn btn-warning">
          Add answer
        </button>
      </div>
    </li>
  </ul>




class QuestionForm extends Component {

  render() {
    return (
      <div className="box">
        <h3 className="undertitle">Add new Question</h3>
        <form onSubmit={ this.props.handleSubmit }>
          <div className="form-group">
            <h4 className="margin-bottom">1. Create your Question first</h4>
            <div className="list-item">
              <label htmlFor="body">Write your Question here.</label>
              <Field name="body" component="input" type="text" placeholder="Question"/>
            </div>
          </div>
          <div className="form-group">
            <h4 className="margin-bottom">2. Add some Answer Options for this Question</h4>
            <FieldArray name="answers" component={renderAnswers} />
          </div>
          <div className="form-group float-right">
            <p>Ready?</p>
            <button type="submit" className="btn btn-primary">Continue</button>
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
