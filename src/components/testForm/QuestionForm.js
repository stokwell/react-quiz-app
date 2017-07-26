import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { addQuestion} from '../../actions/questionActrions';


const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} type={type} placeholder={label} />
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
    <li key={index}>
      <button
        type="button"
        title="Remove Answer"
        onClick={() => fields.remove(index)}
      />
      <h4>
        Answer #{index + 1}
      </h4>
      <Field
        name={`${answer}.body`}
        type="text"
        component={renderField}
        label="Answer"
      />
      <Field
        name={`${answer}.comment`}
        type="text"
        component={renderField}
        label="Comment"
      />
      <Field
        name={`${answer}.right`}
        type="checkbox"
        component={renderField}
        label="Right?"
      />
    </li>
    )}
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Answer
      </button>
    </li>
  </ul>




class QuestionForm extends Component {
  submit = (values) => {
    const test_id = this.props.test_id
    const question = { ...values, test_id: test_id}
    console.log(question)
    addQuestion(question, test_id)

  }

  render() {

    return (
      <div className="box">
        <h2 className="undertitle">Add new Question</h2>
        <form onSubmit={ this.props.handleSubmit(this.submit) }>
          <div className="form-group">
            <h4>Question</h4>
            <label htmlFor="body">Question</label>
            <Field name="body" component="input" type="text"/>
          </div>
          <div className="form-group">
            <FieldArray name="answers" component={renderAnswers} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

QuestionForm = reduxForm({
  form: 'question'
})(QuestionForm)


export default QuestionForm;
