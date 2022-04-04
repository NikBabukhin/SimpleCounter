import s from './Display.module.css'
import React from "react";

type DisplayPropsType = {
    counter: number;
    maxValue: number
}

export const Display: React.FC<DisplayPropsType> = (props) => {
    return (
        <div className={s.wrapper}>
            <span className={`${props.counter >= props.maxValue ? 'stop-count' : ''}`}>{props.counter}</span>
            {props.counter === props.maxValue &&
                <span className={s.span__error}>Ohh...it`s too much, counter can`t be more {props.maxValue}</span>}
        </div>
    )
}