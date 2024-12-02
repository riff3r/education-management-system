import { IFee, IFeeFetchRequest, IFeeFetchResponse, IFeeSaveRequest, IFeeSaveResponse } from "../../../services/fee/feeType";
import { FetchStatusEnum } from "../../../services/fetchType";
import { IBaseActionType } from "../../actionType";

export interface IFeeSliceStateType {
  feeFetchStatus: FetchStatusEnum;
  feeSaveStatus: FetchStatusEnum;
  feeFetchError?: string;
  feeFetchResponse?: IFeeFetchResponse;
  feeSaveError?: string;
  feeSaveResponse?: IFeeSaveResponse;
  fees: IFee[];
}

export interface IFeeFetchActionType extends IBaseActionType {
  payload: IFeeFetchRequest;
}

export interface IFeeFetchSuccessActionType extends IBaseActionType {
  payload: IFeeFetchResponse;
}

export interface IFeeFetchFailureActionType extends IBaseActionType {
  payload: string;
}

export interface IFeeSaveActionType extends IBaseActionType {
  payload: IFeeSaveRequest;
}

export interface IFeeSaveSuccessActionType extends IBaseActionType {
  payload: IFeeSaveResponse;
}

export interface IFeeSaveFailureActionType extends IBaseActionType {
  payload: string;
}