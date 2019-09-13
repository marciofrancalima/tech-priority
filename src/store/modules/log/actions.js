import {
  ADD_LOG_REQUEST,
  ADD_LOG_SUCCESS,
  GET_LOGS_REQUEST,
  GET_LOGS_SUCCESS,
} from '../types';

export function addLogRequest(message, attention, tech) {
  return {
    type: ADD_LOG_REQUEST,
    payload: { message, attention, tech },
  };
}

export function addLogSuccess() {
  return {
    type: ADD_LOG_SUCCESS,
    payload: { loading: false },
  };
}

export function getLogsRequest() {
  return {
    type: GET_LOGS_REQUEST,
  };
}

export function getLogsSuccess(data) {
  return {
    type: GET_LOGS_SUCCESS,
    payload: { data },
  };
}
