import { createSlice } from '@reduxjs/toolkit';
import { FetchStatusEnum } from '../../../services/fetchType';

import {
  IUtilitySliceStateType,
  IUtilitySchoolClassesFetchSuccessActionType,
  IUtilitySchoolClassesFetchFailureActionType,
} from './utilityType';

const initState: IUtilitySliceStateType = {
  schoolClassesFetchStatus: FetchStatusEnum.IDLE,
  schoolClassesError: undefined,
  schoolClassesResponse: undefined,
  schoolClasses: []
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState: initState,
  reducers: {
    resetAllState: () => ({ ...initState }),

    schoolClassesFetch: (state) => {
      state.schoolClassesFetchStatus = FetchStatusEnum.FETCHING;
      state.schoolClassesError = '';
    },
    schoolClassesFetchSuccess: (state, action: IUtilitySchoolClassesFetchSuccessActionType) => {
      state.schoolClassesFetchStatus = FetchStatusEnum.SUCCESS;
      state.schoolClasses = action.payload.schoolClasses;
      state.schoolClassesResponse = action.payload;
    },
    schoolClassesFetchFailure: (state, action: IUtilitySchoolClassesFetchFailureActionType) => {
      state.schoolClassesFetchStatus = FetchStatusEnum.FAILURE;
      state.schoolClassesError = action.payload;
    },
    idleSchoolClassesFetchStatus: (state) => {
      state.schoolClassesFetchStatus = FetchStatusEnum.IDLE;
    },
  },
});

export const utilityActions = utilitySlice.actions;
export const utilityReducer = utilitySlice.reducer;