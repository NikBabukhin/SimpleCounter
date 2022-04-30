import {AppStateType} from "../redux/store";

export const loadState = () => {
    try {
        const serializeState = localStorage.getItem('app-state');
        if (!serializeState) {
            return undefined
        }
        return JSON.parse(serializeState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: AppStateType) => {
    try {
        const serializeState = JSON.stringify(state);
        localStorage.setItem('app-state', serializeState)
    } catch {
        //ignore
    }
}