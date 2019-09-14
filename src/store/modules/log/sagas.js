import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import {
  GET_LOGS_REQUEST,
  ADD_LOG_REQUEST,
  UPDATE_LOG_REQUEST,
  DELETE_LOG_REQUEST,
  SET_CURRENT_REQUEST,
} from '../types';
import {
  getLogsRequest,
  getLogsSuccess,
  addLogSuccess,
  updateLogSuccess,
  setCurrentSuccess,
  setClearCurrent,
  deleteLogSuccess,
} from './actions';

import api from '../../../services/api';

export function* getLogs() {
  const response = yield call(api.get, 'logs');

  yield put(getLogsSuccess(response.data));
}

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

export function* deleteLog({ payload }) {
  const { id } = payload;

  yield call(api.delete, `logs/${id}`);

  yield put(deleteLogSuccess());
  yield put(getLogsRequest());
}

export function* updateLog({ payload }) {
  const { message, attention, tech } = payload;

  const current = yield select(state => state.log.current);

  yield call(api.put, `logs/${current.id}`, {
    message,
    attention,
    tech,
    date: new Date(),
  });

  yield put(updateLogSuccess());
  yield put(setClearCurrent());
  yield put(getLogsRequest());
}

export function* currentLog({ payload }) {
  const logs = yield select(state => state.log.logs);

  const current = yield logs.find(log => log.id === payload.id);

  yield put(setCurrentSuccess(current));
}

export default all([
  takeLatest(GET_LOGS_REQUEST, getLogs),
  takeLatest(ADD_LOG_REQUEST, addLog),
  takeLatest(UPDATE_LOG_REQUEST, updateLog),
  takeLatest(DELETE_LOG_REQUEST, deleteLog),
  takeLatest(SET_CURRENT_REQUEST, currentLog),
]);
