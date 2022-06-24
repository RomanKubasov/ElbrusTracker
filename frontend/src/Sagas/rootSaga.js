import { all } from 'redux-saga/effects';
import teammatesSagaWatcher from './teammatesSaga';

export default function* rootSaga() {
  yield all([
    teammatesSagaWatcher(),
  ]);
}
