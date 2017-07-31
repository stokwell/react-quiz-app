import { FETCH_TESTS, ADD_TEST, TEST_FETCHED, DELETE_TEST, ADD_QUESTION, DELETE_QUESTION } from '../actions/constants';

const initialState = {
  tests: [],
  currentTest: {},
  isLoaded: false
}



export default function eventsReducer (state = initialState, action) {
  switch(action.type) {
    default:
      return state

    case FETCH_TESTS:
      return { ...state, tests: action.payload  }

    case ADD_TEST:
      return { ...state, tests: [ ...state.tests,  action.payload ], currentTest: action.payload, Created: true }

    case TEST_FETCHED:
      return { ...state, currentTest: action.payload, isLoaded: true }

    case DELETE_TEST:
      return { ...state, tests: state.tests.filter((test)=> test.id !== action.payload.id)}

    case ADD_QUESTION:
      return { ...state, currentTest: { ...state.currentTest,  questions: state.currentTest.questions.concat(action.payload)}  }

    case DELETE_QUESTION:
      return { ...state, currentTest: { ...state.currentTest,  questions: state.currentTest.questions.filter((question) => question.id !== action.payload.id)}  }

  }
}