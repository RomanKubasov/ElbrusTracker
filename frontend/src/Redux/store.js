import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/rootSaga';
import teamMatesReducer from './reducers/teamMatesReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    teamMates: teamMatesReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
