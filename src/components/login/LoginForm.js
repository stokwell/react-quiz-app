import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

class LoginForm extends Component {

  static propTypes = {
    userAuthRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userAuthRequest(this.state).then(
      () => {
        this.props.history.push('/');
      }

    )
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

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
          <button className="btn btn-primary btn-lg">
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);