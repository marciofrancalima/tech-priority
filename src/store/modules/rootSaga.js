import { all } from 'redux-saga/effects';

import log from './log/sagas';
import tech from './tech/sagas';

export default function* rootSaga() {
  return yield all([log, tech]);
}
