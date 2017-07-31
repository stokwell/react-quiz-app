import axios from 'axios'
import {reset} from 'redux-form';

import { ADD_QUESTION, DELETE_QUESTION } from './constants';

const URL = 'http://localhost:3000/api/questions'

export function addQuestion(question, test_id){
  const request = axios.post(URL, { question: question, test_id: test_id } )
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: ADD_QUESTION, payload: response.data })
      dispatch(reset('question'))
    });
  };
}

export function deleteQuestion(id){
  const request = axios.delete(`${URL}/${id}`)
  return (dispatch) => {
    request.then((response) =>  {
      dispatch({type: DELETE_QUESTION, payload: response.data})
    });
  };
}