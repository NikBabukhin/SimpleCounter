import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reducer";
import {changeValueReducer} from "./changeValue-reducer";
import {loadState, saveState} from "../utils/localStorage-util";

const rootReducer = combineReducers({
    counter: counterReducer,
    rangeValue: changeValueReducer,
})

export const store = createStore(rootReducer, loadState())
store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        rangeValue: store.getState().rangeValue,
    })
})


export type AppStateType = ReturnType<typeof rootReducer>



