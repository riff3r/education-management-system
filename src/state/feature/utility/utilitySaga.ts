import { call, put, takeLatest } from 'redux-saga/effects';
import { IUtilitySchoolClassesFetchResponse } from '../../../services/utility/utilityType';
import { IResponse } from '../../../services/fetch';
import { utilityActions } from './utilitySlice';
import UtilityService from '../../../services/utility/UtilityService';

function* schoolClassesFetchSaga() {
    try {
        const response: IResponse<IUtilitySchoolClassesFetchResponse> = yield call(UtilityService.schoolClassesFetch);
        if (!response.success) {
            throw new Error('School Class failed');
        }

        yield put(utilityActions.schoolClassesFetchSuccess(response.data));
    } catch (error: any) {
        const errorMessage = error;
        yield put(utilityActions.schoolClassesFetchFailure(errorMessage || 'School Class failed'));
    }
}

export function* utilityWatcherSaga() {
    yield takeLatest(utilityActions.schoolClassesFetch.type, schoolClassesFetchSaga);
}