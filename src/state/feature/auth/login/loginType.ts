import { PayloadAction } from '@reduxjs/toolkit';
import { IBaseActionType } from '../../../actionType';
import { ILoginRequest, ILoginResponse } from '../../../../services/auth/authType';
import { FetchStatusEnum } from '../../../../services/fetchType';

export interface ILoginSliceStateType {
  loginFetchStatus: FetchStatusEnum;
  loginError?: string;
  loginResponse?: ILoginResponse;
  isLogin: boolean;
  user?: ILoginResponse;
}

export interface ILoginActionType extends IBaseActionType {
  payload: ILoginRequest;
}

export interface ILoginSuccessActionType extends IBaseActionType {
  payload: ILoginResponse;
}

export interface ILoginFailureActionType extends IBaseActionType {
  payload: string;
}

export type RefreshTokenActionType = PayloadAction;