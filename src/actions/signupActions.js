import axios from 'axios'

const URL = 'http://localhost:3000/api/users';
//const URL = 'https://sleepy-forest-71707.herokuapp.com/api/users'


export function userSignUpRequest(userData) {
  return dispatch => {
    return axios.post(URL, { user: userData })
  }
}
