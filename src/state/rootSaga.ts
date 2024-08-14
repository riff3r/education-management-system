import { all } from 'redux-saga/effects';
import counterSaga from './feature/counter/counterSaga';

export default function* rootSaga() {
    yield all([counterSaga()]);
}
