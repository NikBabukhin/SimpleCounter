import {DisplaySetter} from "./DisplaySetter/DisplaySetter";
import {Button} from "../Button/Button";
import React, {useState} from "react";

export type ItemAppSetterPropsType = {
    startValue: number,
    maxValue: number,
    setButtonCallBack: (minValue: number, maxValue: number) => void,
}

export const ItemAppSetter: React.FC<ItemAppSetterPropsType> = (props) => {
    const [currentMaxValue, setCurrentMaxValue] = useState<number>(props.maxValue)
    const [currentMinValue, setCurrentMinValue] = useState<number>(props.startValue)

    const onClickChangeValuesHandler = () => {
        props.setButtonCallBack(currentMinValue, currentMaxValue)
    }


    return (
        <div className='App__wrapper'>
            <div className='App__container'>
                <DisplaySetter
                    currentMaxValue={currentMaxValue}
                    currentMinValue={currentMinValue}
                    onChangerMinValue={setCurrentMinValue}
                    onChangerMaxValue={setCurrentMaxValue}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    appearance={!(currentMaxValue <= currentMinValue) || (currentMinValue < 0)}
                />
                <Button
                    onClickHandler={onClickChangeValuesHandler}
                    isDisabled={(currentMaxValue <= currentMinValue) || (currentMinValue < 0)}
                    name={'Set'}
                    extraClass={'add__button'}/>
            </div>
        </div>
    )
}