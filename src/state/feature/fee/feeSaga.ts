import { call, put, takeLatest } from 'redux-saga/effects';
import { IFeeFetchResponse, IFeeSaveResponse } from '../../../services/fee/feeType';
import { IResponse } from '../../../services/fetch';
import { feeActions } from './feeSlice';
import { IFeeFetchActionType, IFeeSaveActionType } from './feeType';
import FeeService from '../../../services/fee/FeeService';

function* feeFetchSaga(action: IFeeFetchActionType) {
    try {
        const response: IResponse<IFeeFetchResponse> = yield call(FeeService.feeFetch, action.payload);
        if (!response.success) {
            throw new Error('Fee failed');
        }

        yield put(feeActions.feeFetchSuccess(response.data));
    } catch (error: any) {
        const errorMessage = error;
        yield put(feeActions.feeFetchFailure(errorMessage || 'Fee failed'));
    }
}

function* feeSaveSaga(action: IFeeSaveActionType) {
    try {
        const response: IResponse<IFeeSaveResponse> = yield call(FeeService.feeSave, action.payload);
        if (!response.success) {
            throw new Error('Fee failed');
        }

        yield put(feeActions.feeSaveSuccess(response.data));
    } catch (error: any) {
        console.log(error);
        
        const errorMessage = error;
        yield put(feeActions.feeSaveFailure(errorMessage || 'Fee failed'));
    }
}

export function* feeWatcherSaga() {
    yield takeLatest(feeActions.feeFetch.type, feeFetchSaga);
    yield takeLatest(feeActions.feeSave.type, feeSaveSaga);
}