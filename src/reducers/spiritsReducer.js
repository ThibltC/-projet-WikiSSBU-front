import { POST_SPIRIT, GET_RANDOM_SPIRITS, GET_RESULT_SPIRITS } from '../actions/types';

const initialState = {
  listSpirits: [],
  randomSpirits: [],
  resultSpirits: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_SPIRIT:
      return {
        ...state,
      };
      case GET_RANDOM_SPIRITS:
      return {
        ...state,
        randomSpirits: action.randomSpiritsArray
      }
      case GET_RESULT_SPIRITS:
      return {
        ...state,
        resultSpirits: action.resultSpiritsArray
      }
    default:
      return state;
  }
};