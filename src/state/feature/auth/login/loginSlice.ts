import { createSlice } from '@reduxjs/toolkit';
import { FetchStatusEnum } from '../../../../services/fetchType';

import {
  ILoginSliceStateType,
  ILoginActionType,
  ILoginSuccessActionType,
  ILoginFailureActionType,
} from './loginType';

const initState: ILoginSliceStateType = {
  loginFetchStatus: FetchStatusEnum.IDLE,
  loginError: undefined,
  loginResponse: undefined,

  user: undefined,
  isLogin: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initState,
  reducers: {
    resetAllState: () => ({ ...initState }),

    login: (state, _action: ILoginActionType) => {
      state.loginFetchStatus = FetchStatusEnum.FETCHING;
      state.loginError = '';
    },
    loginSuccess: (state, action: ILoginSuccessActionType) => {
      state.loginFetchStatus = FetchStatusEnum.SUCCESS;
      state.isLogin = true;
      state.user = action.payload;
      state.loginResponse = action.payload;
    },
    loginFailure: (state, action: ILoginFailureActionType) => {
      state.loginFetchStatus = FetchStatusEnum.FAILURE;
      state.loginError = action.payload;
      state.isLogin = false;
    },
    idleLoginFetchStatus: (state) => {
      state.loginFetchStatus = FetchStatusEnum.IDLE;
    },
    resetLogin: () => {
      return initState;
    },
    logout: () => { },
  },
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;