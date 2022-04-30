import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reducer";
import {changeValueReducer} from "./changeValue-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    rangeValue: changeValueReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)