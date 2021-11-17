import { REQEUST_SAGA_TEST, SUCCESS_CHANGE_NICKNAME } from '../reducers/redux';
import { all, fork, put, takeLatest } from 'redux-saga/effects';

function* testSagaF() {
  try {
    yield console.log('testSagaF');
    yield put({ type: SUCCESS_CHANGE_NICKNAME, data: 'SAGA_TEST' });
  } catch {
    console.error('Error saga TestSagaF()');
  }
}

function* watchTestSaga() {
  yield takeLatest(REQEUST_SAGA_TEST, testSagaF);
}

export default function* rootSaga() {
  yield all([fork(watchTestSaga)]);
}
