import { GET_LIST_SERIE } from '../actions/types';

const initialState = {
  listSeries: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_SERIE:
      return {
        ...state,
        listSeries: action.listSeriesArray,
      };
    default:
      return state;
  }
};