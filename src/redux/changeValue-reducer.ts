const initialState = {
    minValue: 0,
    maxValue: 10
}
type initialStateType = typeof initialState;

export const changeValueReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    return state;
}