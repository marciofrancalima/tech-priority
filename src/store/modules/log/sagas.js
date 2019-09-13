import { all, call, takeLatest, put } from 'redux-saga/effects';

import { ADD_LOG_REQUEST, GET_LOGS_REQUEST } from '../types';
import { addLogSuccess, getLogsSuccess, getLogsRequest } from './actions';

import api from '../../../services/api';

export function* addLog({ payload }) {
  const { message, attention, tech } = payload;

  yield call(api.post, 'logs', {
    message,
    attention,
    tech,
    date: new Date(),
  });

  yield put(addLogSuccess());
  yield put(getLogsRequest());
}

export function* getLogs() {
  const response = yield call(api.get, 'logs');

  yield put(getLogsSuccess(response.data));
}

export default all([
  takeLatest(ADD_LOG_REQUEST, addLog),
  takeLatest(GET_LOGS_REQUEST, getLogs),
]);
