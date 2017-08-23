import React, { Component } from 'react';
import { connect} from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages'

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount(){
      if(!this.props.isAuthenticated){
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page!'
        });
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps){
      if(!nextProps.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You successefully loged out!'
        });
        this.props.history.push('/');
      }

    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  //have to add PropTypes

  function mapStateToProps(state){
    return {
      isAuthenticated: state.authReducer.isAuthenticated
    }
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate)

}

