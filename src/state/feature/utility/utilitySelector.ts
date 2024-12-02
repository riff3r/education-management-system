import { StoreStateType } from "../../storeType";

export const utilitySelector = {
    schoolClassesFetchStatus: (state: StoreStateType) => state.utility?.schoolClassesFetchStatus,
    schoolClassesError: (state: StoreStateType) => state.utility?.schoolClassesError,
    schoolClassesResponse: (state: StoreStateType) => state.utility?.schoolClassesResponse,
    schoolClasses: (state: StoreStateType) => state.utility?.schoolClasses,
};