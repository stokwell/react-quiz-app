import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import './navigation.css';

class Navigation extends Component  {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  logout = (e) => {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth;


    const userLinks = (
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <a href="#" onClick={this.logout}>Logout</a>
      </div>
    )

    const guestLinks = (
      <div>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    )
    return (
      <header>
        <Link to="/">Tests</Link>
        { isAuthenticated ? userLinks : guestLinks }
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  }
}

export default withRouter(connect(mapStateToProps, { logout } )(Navigation));
