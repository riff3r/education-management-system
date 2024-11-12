import { all } from 'redux-saga/effects';
import { loginWatcherSaga } from './feature/auth/login/loginSaga';

export default function* rootSaga() {
    yield all([loginWatcherSaga()]);
}
