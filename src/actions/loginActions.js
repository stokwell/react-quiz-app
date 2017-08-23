import axios from 'axios'
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken'

import { SET_CURRENT_USER } from './constants'

const URL = 'http://localhost:3000/api/authenticate';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userAuthRequest(userData) {
  return dispatch => {
    return axios.post(URL, userData).then(res => {
      const token = res.data.auth_token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    })
  }
}