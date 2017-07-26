import { FETCH_TESTS, ADD_TEST, TEST_FETCHED } from '../actions/constants';

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
  }
}