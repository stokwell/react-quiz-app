import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';

import { userAuthRequest } from '../../actions/loginActions'

class LoginPage extends Component {
	render() {
		return (
			<div className="form-wrapper">
				<LoginForm userAuthRequest={this.props.userAuthRequest}/>
			</div>
		);
	}
}

export default connect(null, { userAuthRequest })(LoginPage)
