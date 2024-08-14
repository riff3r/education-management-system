import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './feature/counter/counterSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
