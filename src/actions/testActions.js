import axios from 'axios'
import { FETCH_TESTS, ADD_TEST, TEST_FETCHED, DELETE_TEST, UPDATE_TEST } from './constants';

//const URL = 'https://sleepy-forest-71707.herokuapp.com/api/tests';
const URL = 'http://localhost:3000/api/tests'

export function addTest(data) {
  const request = axios.post(URL, { test: data  } )
  return (dispatch) => {
    request.then((response) => {
      dispatch({type: ADD_TEST, payload: response.data })
    });
  };
}

export function fetchTest(id) {
  const request = axios.get(`${URL}/${id}`)
  return (dispatch) => {
    request.then((response) =>  {
      dispatch({type: TEST_FETCHED, payload: response.data})
    });
  };
}

export function fetchTests() {
  const request = axios.get(URL)
  return (dispatch) => {
    request.then((response) => {
      dispatch({type: FETCH_TESTS, payload: response.data})
    });
  };
}

export function deleteTest(id) {
  const request = axios.delete(`${URL}/${id}`)
  return (dispatch) => {
    request.then((response) =>  {
      dispatch({type: DELETE_TEST, payload: response.data})
    });
  };
}

export function updateTest(id, data) {
  const request = axios.patch(`${URL}/${id}`, { test: data  } )
  return (dispatch) => {
    request.then((response) => {
      dispatch({type: UPDATE_TEST, payload: response.data })
    });
  };

}
