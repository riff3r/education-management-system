import { createSlice } from '@reduxjs/toolkit';
import { FetchStatusEnum } from '../../../services/fetchType';

import {
  IFeeSliceStateType,
  IFeeFetchActionType,
  IFeeFetchSuccessActionType,
  IFeeFetchFailureActionType,
  IFeeSaveActionType,
  IFeeSaveSuccessActionType,
  IFeeSaveFailureActionType,
} from './feeType';

const initState: IFeeSliceStateType = {
  feeFetchStatus: FetchStatusEnum.IDLE,
  feeSaveStatus: FetchStatusEnum.IDLE,
  feeFetchError: undefined,
  feeFetchResponse: undefined,
  feeSaveError: undefined,
  feeSaveResponse: undefined,
  fees: []
};

const feeSlice = createSlice({
  name: 'fee',
  initialState: initState,
  reducers: {
    resetAllState: () => ({ ...initState }),

    feeFetch: (state, _action: IFeeFetchActionType) => {
      state.feeFetchStatus = FetchStatusEnum.FETCHING;
      state.feeFetchError = '';
    },
    feeFetchSuccess: (state, action: IFeeFetchSuccessActionType) => {
      state.feeFetchStatus = FetchStatusEnum.SUCCESS;
      state.fees = action.payload.fees;
      state.feeFetchResponse = action.payload;
    },
    feeFetchFailure: (state, action: IFeeFetchFailureActionType) => {
      state.feeFetchStatus = FetchStatusEnum.FAILURE;
      state.feeFetchError = action.payload;
    },
    idleFeeFetchStatus: (state) => {
      state.feeFetchStatus = FetchStatusEnum.IDLE;
    },

    feeSave: (state, _action: IFeeSaveActionType) => {
      state.feeSaveStatus = FetchStatusEnum.SAVING;
      state.feeSaveError = '';
    },
    feeSaveSuccess: (state, action: IFeeSaveSuccessActionType) => {
      state.feeSaveStatus = FetchStatusEnum.SUCCESS;
      state.fees = action.payload.fees;
      state.feeSaveResponse = action.payload;
    },
    feeSaveFailure: (state, action: IFeeSaveFailureActionType) => {
      state.feeSaveStatus = FetchStatusEnum.FAILURE;
      state.feeSaveError = action.payload;
    },
    idleFeeSaveStatus: (state) => {
      state.feeSaveStatus = FetchStatusEnum.IDLE;
    },

    feesUpdate: (state, action) => {
      state.fees = action.payload;
    }
  },
});

export const feeActions = feeSlice.actions;
export const feeReducer = feeSlice.reducer;