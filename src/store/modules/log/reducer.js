import produce from 'immer';
import {
  ADD_LOG_REQUEST,
  ADD_LOG_SUCCESS,
  GET_LOGS_REQUEST,
  GET_LOGS_SUCCESS,
} from '../types';

const INITIAL_STATE = {
  logs: [],
  current: null,
  loading: false,
  error: null,
};

export default function log(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_LOGS_REQUEST: {
        draft.loading = true;
        break;
      }
      case GET_LOGS_SUCCESS: {
        draft.logs = action.payload.data;
        draft.loading = false;
        break;
      }
      case ADD_LOG_REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_LOG_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
