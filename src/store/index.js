import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import dataReducer from '../store/dataSlice';
import rootSaga from '../store/sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configuring the Redux Store
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
