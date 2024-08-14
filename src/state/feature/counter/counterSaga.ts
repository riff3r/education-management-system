import { put, takeEvery, delay } from 'redux-saga/effects';
import { increment } from './counterSlice';

// Worker saga: will perform the async increment task
function* incrementAsync() {
    yield delay(1000); // Simulate a delay
    yield put(increment());
}

// Watcher saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
    yield takeEvery('counter/incrementAsync', incrementAsync);
}

export default watchIncrementAsync;
