import React, {useState} from 'react';
import './App.css';
import {ItemAppCounter} from "./Components/ItemApp/ItemApp";
import {ItemAppSetter} from "./Components/ItemAppSetter/ItemAppSetter";


function App() {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(8);
    const [counter, setCounter] = useState<number>(startValue);


    const plusCounter = (value: number) => {
        if (counter < maxValue) {
            setCounter(counter + value);
        }
    }

    const resetCounter = () => {
        setCounter(startValue);
    }

    const setButtonHandler =(minValue:number, maxValue:number)=> {
        setCounter(minValue);
        setMaxValue(maxValue);
        setStartValue(minValue)
    }


    return (
        <div className="App">
            <ItemAppSetter
                startValue={startValue}
                maxValue={maxValue}
                setButtonCallBack={setButtonHandler}
            />

            <ItemAppCounter
                maxValue={maxValue}
                counter={counter}
                startValue={startValue}
                plusCounter={plusCounter}
                resetCounter={resetCounter}
            />

        </div>
    );
}

export default App;

