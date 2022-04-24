import { combineReducers } from "redux";
import loginState from './loginState';
import themeMode from "./themeMode";

const rootReducer = combineReducers({
    loginState,
    themeMode
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;