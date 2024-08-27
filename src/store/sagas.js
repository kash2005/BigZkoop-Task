import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './dataSlice';

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/photos');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchDataRequest.type, fetchDataSaga);
}
