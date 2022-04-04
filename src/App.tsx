import React, {useEffect, useState} from 'react';
import './App.css';
import {ItemAppCounter} from "./Components/ItemApp/ItemApp";
import {ItemAppSetter} from "./Components/ItemAppSetter/ItemAppSetter";


function App() {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(8);
    const [counter, setCounter] = useState<number>(startValue);
    const [isDisableNow, setIsDisableNow] = useState<boolean>(false);


    useEffect(() => {
        let startValueLocal = localStorage.getItem('startValue');
        let maxValueLocal = localStorage.getItem('maxValue');
        if (startValueLocal && maxValueLocal) {
            setStartValue(+startValueLocal)
            setMaxValue(+maxValueLocal)
            setCounter(+startValueLocal);
        }
    }, [])

    const plusCounter = (value: number) => {
        if (counter < maxValue) {
            setCounter(counter + value);
        }
    }

    const resetCounter = () => {
        setCounter(startValue);
    }

    const setButtonHandler = (minValue: number, maxValue: number) => {
        setCounter(minValue);
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

