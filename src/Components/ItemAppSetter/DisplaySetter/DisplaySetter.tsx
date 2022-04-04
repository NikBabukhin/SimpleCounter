import {Input} from "../../Input/Input";
import s from './DisplaySetter.module.css'
import React from "react";
import {ErrorMessage} from "../../ErrorMessage/ErrorMessage";


export type DisplaySetterPropsType = {
    startValue: number,
    maxValue: number,
    setStartValue: (value: number) => void,
    setMaxValue: (value: number) => void,
    appearance: boolean,
}


export const DisplaySetter: React.FC<DisplaySetterPropsType> = (props) => {

    const message = () => {
        if (props.startValue < 0 && props.startValue <= props.maxValue) {
            return <ErrorMessage message={'Counter cannot process this value'}/>
        } else if ((props.startValue >= props.maxValue) && props.startValue >= 0) {
            return <ErrorMessage message={'Max value should be more than min value'}/>
        } else if ((props.startValue >= props.maxValue) && props.startValue < 0) {
            return <ErrorMessage message={'Are you serious?'}/>
        } else {
            return
        }
    }


    return (
        <div className={s.main__wrapper}>
            <div className={s.wrapper}>
                <div className={s.input__wrapper}>
                    <span>Min Value:</span>
                    <Input
                        setCurrentValue={props.setStartValue}
                        currentValue={props.startValue}
                        errorInputClass={s.error}
                        classInput={s.input}
                        placeholder={'Min Value'}
                        isError={(props.startValue >= props.maxValue) || props.startValue < 0}
                    />
                </div>
                {message()}
                <div className={s.input__wrapper}>
                    <span>Max Value:</span>
                    <Input
                        setCurrentValue={props.setMaxValue}
                        currentValue={props.maxValue}
                        errorInputClass={s.error}
                        classInput={s.input}
                        placeholder={'Max Value'}
                        isError={(props.startValue >= props.maxValue) || props.startValue < 0}
                    />
                </div>
            </div>
        </div>
    )
}