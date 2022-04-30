const initialState = {
    value: 0
}
type initialStateType = typeof initialState;
export type ActionIncType = {
    type: 'INC-COUNTER-VALUE',
}
export type ActionGetBaseValueType = {
    type: 'GET-VALUE-FROM-LOCAL-STORAGE',
    payload: {
        startValue: number,
    }
}
export type ActionsCounterTypes = ActionIncType | ActionGetBaseValueType

export const counterReducer = (state: initialStateType = initialState, action: ActionsCounterTypes): initialStateType => {
    switch (action.type) {
        case "INC-COUNTER-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "GET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state, value: action.payload.startValue
            }
    }
    return state
}

export const incCounterAC = (): ActionIncType => ({
    type: 'INC-COUNTER-VALUE',
})
export const setBaseValueAC = (startValue: number) => ({
    type: 'GET-VALUE-FROM-LOCAL-STORAGE',
    payload: {
        startValue
    }
})