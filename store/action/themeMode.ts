import { SET_LIGHT, SET_DARK } from "./actionType";

export function onLight() {
    return { type: SET_LIGHT };
}

export function onDark() {
    return { type: SET_DARK };
}