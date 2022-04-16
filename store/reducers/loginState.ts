import { SET_LOGIN, SET_LOGOUT } from "../action/actionType";
import { LoginState } from '../state';

const initialState: LoginState = { state: false };

export default function loginState(state = initialState, action: { type: string }) {
    switch (action.type) {
        case SET_LOGIN:
            return { state: true };
        case SET_LOGOUT:
        return { state: false };
        default:
            return state;
    }
}