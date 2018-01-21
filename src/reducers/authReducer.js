import { SET_CURRENT_USER } from '../actions/constants';
import isEmpty from 'lodash/isEmpty'

const initialState = {
  isAuthenticated: !!localStorage.getItem('jwtToken'),
  user: {}
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };

    default:
      return state

  }
}
