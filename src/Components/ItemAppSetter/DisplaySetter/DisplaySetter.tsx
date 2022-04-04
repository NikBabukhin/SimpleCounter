import {Input} from "../../Input/Input";
import s from './DisplaySetter.module.css'
import React from "react";
import {ErrorMessage} from "../../ErrorMessage/ErrorMessage";


export type DisplaySetterPropsType = {
    startValue: number,
    maxValue: number,
    currentMaxValue: number,
    currentMinValue: number,
    onChangerMinValue: (currentValue: number) => void,
    onChangerMaxValue: (currentValue: number) => void,
    appearance: boolean,
}


export const DisplaySetter: React.FC<DisplaySetterPropsType> = (props) => {
    let message = null;

    if (props.currentMinValue < 0 && props.currentMinValue <= props.currentMaxValue) {
        message = <ErrorMessage message={'Counter cannot process this value'}/>
    } else if ((props.currentMinValue >= props.currentMaxValue) && props.currentMinValue >= 0) {
        message = <ErrorMessage message={'Max value should be more than min value'}/>
    } else if ((props.currentMinValue >= props.currentMaxValue) && props.currentMinValue < 0) {
        message = <ErrorMessage message={'Are you serious?'}/>
    }

    return (
        <div className={s.main__wrapper}>
            <div className={s.wrapper}>
                <div className={s.input__wrapper}>
                    <span>Min Value:</span>
                    <Input
                        setCurrentValue={props.onChangerMinValue}
                        currentValue={props.startValue}
                        errorInputClass={s.error}
                        classInput={s.input}
                        placeholder={'Min Value'}
                        isError={(props.currentMinValue >= props.currentMaxValue) || props.currentMinValue < 0}
                    />
                </div>
                {message}
                <div className={s.input__wrapper}>
                    <span>Max Value:</span>
                    <Input
                        setCurrentValue={props.onChangerMaxValue}
                        currentValue={props.maxValue}
                        errorInputClass={s.error}
                        classInput={s.input}
                        placeholder={'Max Value'}
                        isError={(props.currentMinValue >= props.currentMaxValue) || props.currentMinValue < 0}
                    />
                </div>
            </div>
        </div>
    )
}