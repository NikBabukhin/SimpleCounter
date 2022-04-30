import React, {useEffect, useState} from 'react';
import './App.css';
import {ItemAppCounter} from "./Components/ItemApp/ItemApp";
import {ItemAppSetter} from "./Components/ItemAppSetter/ItemAppSetter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {incCounterAC, setBaseValueAC} from "./redux/counter-reducer";
import {changeMaxValueAC, changeMinValueAC} from "./redux/changeValue-reducer";

function App() {
    //Local state
    const [isDisableNow, setIsDisableNow] = useState<boolean>(false);

    //Selectors
    const startValue = useSelector<AppStateType, number>(state => state.rangeValue.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.rangeValue.maxValue)
    const counter = useSelector<AppStateType, number>(state => state.counter.value)
    //Dispatch
    const dispatch = useDispatch();

    //Use dispatch for counter value
    const resetCounter = () => {
        dispatch(setBaseValueAC(startValue));
    }
    const plusCounter = () => {
        if (counter < maxValue) {
            dispatch(incCounterAC())
        }
    }
    //Use dispatch for counter range
    const setStartValue = (num: number) => {
        dispatch(changeMinValueAC(num))
    }
    const setMaxValue = (num: number) => {
        dispatch(changeMaxValueAC(num))
    }

    //Click handler
    const setButtonHandler = (minValue: number, maxValue: number) => {
        dispatch(setBaseValueAC(minValue));
        setMaxValue(maxValue);
        setStartValue(minValue);
    }


    //Main return
    return (
        <div className="App">
            <ItemAppSetter
                startValue={startValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setButtonCallBack={setButtonHandler}
                setIsDisableNow={setIsDisableNow}
            />
            <ItemAppCounter
                isDisableNow={isDisableNow}
                startValue={startValue}
                maxValue={maxValue}
                counter={counter}
                plusCounter={plusCounter}
                resetCounter={resetCounter}
            />

        </div>
    );
}

export default App;

