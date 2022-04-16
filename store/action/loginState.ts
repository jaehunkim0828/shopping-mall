import { SET_LOGIN, SET_LOGOUT } from "./actionType";

export function loginAct() {
    return { 
        type: SET_LOGIN,
    }
}

export function logoutAct() {
    return { 
        type: SET_LOGOUT,
    }
}