import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/rootSaga';
import teamMatesReducer from './reducers/teamMatesReducer';
import feedbackToReducer from './reducers/feedbackToReducer';
import feedbackMetricsReducer from './reducers/feedbackMetricsReducer';
import feedbackReducer from './reducers/feedbackReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    teamMates: teamMatesReducer,
    feedbackTo: feedbackToReducer,
    feedbackMetrics: feedbackMetricsReducer,
    feedback: feedbackReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
