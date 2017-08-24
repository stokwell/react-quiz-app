import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

class SignupForm extends Component {

  static propTypes = {
    userSignUpRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = { name: this.state.name, email: this.state.email, password: this.state.password }
    this.props.userSignUpRequest(userData).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You signed up successefully. Welcome!'
        })
        this.props.history.push('/dashboard');
      }

    )
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1 className="form-title">Please, sign up!</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.name}
            onChange={this.onChange}
            type="text"
            name="name"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupForm);
