import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import '../../css/navigation.css';

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
        <Link to="/dashboard" className="auth-link">Dashboard</Link>
        <a href="#" onClick={this.logout} className="auth-link">Logout</a>
      </div>
    )

    const guestLinks = (
      <div>
        <Link to="/login" className="auth-link">Sign In</Link>
        <Link to="/signup" className="auth-link">Sign Up</Link>
      </div>
    )
    return (
      <header>
        <h2><Link to="/">Quiz It</Link></h2>
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
