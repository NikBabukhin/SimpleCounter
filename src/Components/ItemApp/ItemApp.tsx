import {Display} from "./Display/Display";
import {ButtonBlock} from "./ButtonBlock/ButtonBlock";
import React from "react";

type ItemAppPropsType = {
    maxValue: number,
    startValue: number,
    counter: number,
    plusCounter: (value: number) => void,
    resetCounter: () => void,
}

export const ItemAppCounter:React.FC<ItemAppPropsType> = (props) => {
    return (
        <div className='App__wrapper'>
            <div className='App__container'>
                <Display
                    maxValue={props.maxValue}
                    counter={props.counter}
                />
                <ButtonBlock
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    plusCounter={props.plusCounter}
                    resetCounter={props.resetCounter}
                    currentCounter={props.counter}/>
            </div>
        </div>
    )
}