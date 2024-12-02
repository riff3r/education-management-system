import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './feature/auth/login/loginSlice';
import { feeReducer } from './feature/fee/feeSlice';
import { utilityReducer } from './feature/utility/utilitySlice';

const rootReducer = combineReducers({
    login: loginReducer,
    fee: feeReducer,
    utility: utilityReducer
});

export default rootReducer;