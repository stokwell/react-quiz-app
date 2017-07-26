import axios from 'axios'

const URL = 'http://localhost:3000/api/questions'

export function addQuestion(question, test_id){
  const request = axios.post(URL, { question: question, test_id: test_id } )

}