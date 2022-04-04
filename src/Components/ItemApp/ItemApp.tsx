import {Display} from "./Display/Display";
import {ButtonBlock} from "./ButtonBlock/ButtonBlock";
import s from './Display/Display.module.css'
import React from "react";

type ItemAppPropsType = {
    maxValue: number,
    startValue: number,
    counter: number,
    plusCounter: (value: number) => void,
    resetCounter: () => void,
    isDisableNow: boolean,
}

export const ItemAppCounter: React.FC<ItemAppPropsType> = (props) => {

    const currentStatus = () => {
        if (props.isDisableNow) {
            return (<div className={`${s.wrapper} ${s.text__span}`}>
                <span>Enter values and press "Set"</span>
            </div>)
        } else {
            return <Display
                maxValue={props.maxValue}
                counter={props.counter}
            />
        }
    }


    return (
        <div className='App__wrapper'>
            <div className='App__container'>
                {currentStatus()}
                <ButtonBlock
                    isDisableNow={props.isDisableNow}
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    plusCounter={props.plusCounter}
                    resetCounter={props.resetCounter}
                    currentCounter={props.counter}/>
            </div>
        </div>
    )
}