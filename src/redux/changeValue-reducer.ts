const initialState = {
    minValue: 0,
    maxValue: 10
}

type ChangeMinValueACType = {
    type: 'CHANGE-MIN-VALUE',
    payload: {
        minValue: number
    }
}
type ChangeMaxValueACType = {
    type: 'CHANGE-MAX-VALUE',
    payload: {
        maxValue: number
    }
}
type ActionType = ChangeMinValueACType | ChangeMaxValueACType;
type initialStateType = typeof initialState;

export const changeValueReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "CHANGE-MAX-VALUE":
        case "CHANGE-MIN-VALUE":
            return {
                ...state,
                ...action.payload,
            }
    }
    return state;
}

export const changeMinValueAC = (minValue: number): ChangeMinValueACType => ({
    type: 'CHANGE-MIN-VALUE',
    payload: {
        minValue
    }
})

export const changeMaxValueAC = (maxValue: number): ChangeMaxValueACType => ({
    type: 'CHANGE-MAX-VALUE',
    payload: {
        maxValue
    }
})