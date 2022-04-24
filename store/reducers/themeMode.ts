import { SET_DARK, SET_LIGHT } from "../action/actionType";
import { Theme } from "../state";

const initialState: Theme = { mode: 'light' };

export default function themeMode(state = initialState, action: { type: string }) {
    switch(action.type) {
        case SET_LIGHT:
            return { mode: 'light' };
        case SET_DARK:
            return { mode: 'dark' };
        default:
            return state;
    }
}