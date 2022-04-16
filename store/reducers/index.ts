import { combineReducers } from "redux";
import loginState from './loginState';

const rootReducer = combineReducers({
    loginState
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;