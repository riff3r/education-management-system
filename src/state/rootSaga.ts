import { all } from 'redux-saga/effects';
import { loginWatcherSaga } from './feature/auth/login/loginSaga';
import { feeWatcherSaga } from './feature/fee/feeSaga';
import { utilityWatcherSaga } from './feature/utility/utilitySaga';

export default function* rootSaga() {
    yield all([loginWatcherSaga(), feeWatcherSaga(), utilityWatcherSaga()]);
}
