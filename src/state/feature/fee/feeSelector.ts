import { StoreStateType } from "../../storeType";

export const feeSelector = {
    feeFetchStatus: (state: StoreStateType) => state.fee?.feeFetchStatus,
    feeFetchError: (state: StoreStateType) => state.fee?.feeFetchError,
    feeFetchResponse: (state: StoreStateType) => state.fee?.feeFetchResponse,
    fees: (state: StoreStateType) => state.fee?.fees,
    feeSaveStatus: (state: StoreStateType) => state.fee?.feeSaveStatus
};