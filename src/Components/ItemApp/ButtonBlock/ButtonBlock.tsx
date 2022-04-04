import React from "react";
import s from './ButtonBlock.module.css'
import {Button} from "../../Button/Button";

type ButtonBlockPropsType = {
    plusCounter: (value:number) => void;
    resetCounter: () => void;
    currentCounter:number;
    maxValue: number;
    startValue: number
}

export const ButtonBlock: React.FC<ButtonBlockPropsType> = (props) => {

    return (
        <div className={s.wrapper}>
            <Button
                extraClass={'add__button'}
                onClickHandler={()=>props.plusCounter(1)}
                name={'Plus'}
                isDisabled={props.currentCounter===props.maxValue}
            />

            <Button
                onClickHandler={props.resetCounter}
                name={'Reset'}
                isDisabled={props.currentCounter===props.startValue}
            />
        </div>
    )
}

