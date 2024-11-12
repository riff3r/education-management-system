import { StoreStateType } from "../../../storeType";

export const loginSelector = {
    loginFetchStatus: (state: StoreStateType) => state.login?.loginFetchStatus,
    loginError: (state: StoreStateType) => state.login?.loginError,
    loginResponse: (state: StoreStateType) => state.login?.loginResponse,
    isLogIn: (state: StoreStateType) => state.login?.isLogin,
    user: (state: StoreStateType) => state.login?.user,
};