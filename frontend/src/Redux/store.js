import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/rootSaga';
import teamMatesReducer from './reducers/teamMatesReducer';
import feedbackToReducer from './reducers/feedbackToReducer';
import feedbackMetricsReducer from './reducers/feedbackMetricsReducer';
import feedbackReducer from './reducers/feedbackReducer';
import myFeedbackReducer from './reducers/myFeedbackReducer';
import userRouter from './reducers/userReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    teamMates: teamMatesReducer,
    feedbackTo: feedbackToReducer,
    feedbackMetrics: feedbackMetricsReducer,
    feedback: feedbackReducer,
    myFeedback: myFeedbackReducer,
    user: userRouter,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
