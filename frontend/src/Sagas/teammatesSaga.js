import {
  call, put, throttle,
} from 'redux-saga/effects';

import { REQUEST_TEAMMATES, GET_TEAMMATES } from '../Redux/types/types';

const getTeamMatesRequest = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/teammates`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return data;
};

function* teammatesSagaWorker(action) {
  const res = yield call(getTeamMatesRequest, action.value);
  yield put({ type: GET_TEAMMATES, value: res });
}

function* teammatesSagaWatcher() {
  yield throttle(1000, REQUEST_TEAMMATES, teammatesSagaWorker);
}

export default teammatesSagaWatcher;
