import { combineReducers } from 'redux';

import seriesReducer from './seriesReducer';
import spiritsReducer from './spiritsReducer'

export default combineReducers({
  series: seriesReducer,
  spirits: spiritsReducer
});
