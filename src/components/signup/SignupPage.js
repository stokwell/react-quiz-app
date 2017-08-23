import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../../actions/signupActions'
import { addFlashMessage } from '../../actions/flashMessages'
import { Link } from 'react-router-dom'

import SignupForm from './SignupForm';

import './signup.css'


class SignupPage extends Component {

  static propTypes = {
    userSignUpRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

  render() {
    const { userSignUpRequest, addFlashMessage } = this.props
    return (
      <div className="signup">
        <div>
          <SignupForm userSignUpRequest={userSignUpRequest} addFlashMessage={addFlashMessage}/>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    );
  }
}



export default connect((state) => {return {} }, { userSignUpRequest, addFlashMessage })(SignupPage);