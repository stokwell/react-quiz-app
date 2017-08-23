import axios from 'axios'

const URL = 'http://localhost:3000/api/users';

export function userSignUpRequest(userData) {
  return dispatch => {
    return axios.post(URL, { user: userData })
  }
}