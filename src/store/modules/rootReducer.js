import { combineReducers } from 'redux';

import log from './log/reducer';
import tech from './tech/reducer';

export default combineReducers({
  log,
  tech,
});
