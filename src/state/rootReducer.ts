import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './feature/auth/login/loginSlice';

const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;