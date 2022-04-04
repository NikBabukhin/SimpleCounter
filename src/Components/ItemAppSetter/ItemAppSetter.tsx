import {DisplaySetter} from "./DisplaySetter/DisplaySetter";
import {Button} from "../Button/Button";
import React from "react";

export type ItemAppSetterPropsType = {
    startValue: number,
    maxValue: number,
    setMaxValue: (value: number) => void,
    setStartValue: (value: number) => void,
    setButtonCallBack: (minValue: number, maxValue: number) => void,
    setIsDisableNow: (isDisabled: boolean) => void
}

export const ItemAppSetter: React.FC<ItemAppSetterPropsType> = (props) => {

    const onClickChangeValuesHandler = () => {
        props.setButtonCallBack(props.startValue, props.maxValue);
        props.setIsDisableNow(false);
    }

    const currentValueReaderMin = (value: number) => {
        props.setIsDisableNow(true);
        props.setStartValue(value);
    }

    const currentValueReaderMax = (value: number) => {
        props.setIsDisableNow(true);
        props.setMaxValue(value);
    }

    return (
        <div className='App__wrapper'>
            <div className='App__container'>
                <DisplaySetter
                    setStartValue={currentValueReaderMin}
                    setMaxValue={currentValueReaderMax}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    appearance={!(props.maxValue <= props.startValue) || (props.startValue < 0)}
                />
                <Button
                    onClickHandler={onClickChangeValuesHandler}
                    isDisabled={(props.maxValue <= props.startValue) || (props.startValue < 0)}
                    name={'Set'}
                    extraClass={'add__button'}/>
            </div>
        </div>
    )
}