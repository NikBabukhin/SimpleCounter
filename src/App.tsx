import React, {useEffect, useState} from 'react';
import './App.css';
import {ItemAppCounter} from "./Components/ItemApp/ItemApp";
import {ItemAppSetter} from "./Components/ItemAppSetter/ItemAppSetter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {incCounterAC, setBaseValueAC} from "./redux/counter-reducer";


function App() {

    const [isDisableNow, setIsDisableNow] = useState<boolean>(false);

    const startValue = useSelector<AppStateType, number>(state => state.rangeValue.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.rangeValue.maxValue)
    const counter = useSelector<AppStateType, number>(state => state.counter.value)

    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incCounterAC())
    }

    const setStartValue=(num:number)=> {

    }
    const setMaxValue=(num:number)=> {

    }

    useEffect(() => {
        let startValueLocal = localStorage.getItem('startValue');
        let maxValueLocal = localStorage.getItem('maxValue');
        if (startValueLocal && maxValueLocal) {
            setStartValue(+startValueLocal)
            setMaxValue(+maxValueLocal)
            dispatch(setBaseValueAC(+startValueLocal));
        }
    }, [])

    const plusCounter = () => {
        if (counter < maxValue) {
            incHandler();
        }
    }

    const resetCounter = () => {
        dispatch(setBaseValueAC(startValue));
    }

    const setButtonHandler = (minValue: number, maxValue: number) => {
        dispatch(setBaseValueAC(minValue));
        setMaxValue(maxValue);
        setStartValue(minValue);
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }

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

