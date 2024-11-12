import { call, put, takeLatest } from 'redux-saga/effects';
import { ILoginResponse } from '../../../../services/auth/authType';
import { IResponse } from '../../../../services/fetch';
import { loginActions } from './loginSlice';
import { ILoginActionType } from './loginType';
import AuthService from '../../../../services/auth/AuthService';
import CookieService from '../../../../services/CookieService';

function* loginSaga(action: ILoginActionType) {
    try {
        const response: IResponse<ILoginResponse> = yield call(AuthService.login, action.payload);
        if (!response.success) {
            throw new Error('Login failed');
        }

        CookieService.setCookie("secure_auth_access", response.data.tokens.access.token);
        CookieService.setCookie("secure_auth_refresh", response.data.tokens.refresh.token);

        yield put(loginActions.loginSuccess(response.data));
    } catch (error: any) {
        const errorMessage = error;
        yield put(loginActions.loginFailure(errorMessage || 'Login failed'));
    }
}

export function* loginWatcherSaga() {
    yield takeLatest(loginActions.login.type, loginSaga);
}