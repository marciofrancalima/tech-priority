import { all } from 'redux-saga/effects';

import log from './log/sagas';

export default function* rootSaga() {
  return yield all([log]);
}
