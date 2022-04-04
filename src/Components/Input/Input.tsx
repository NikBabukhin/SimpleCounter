import React, {ChangeEvent} from "react";

type InputPropsType = {
    currentValue: number,
    setCurrentValue: (value: number) => void,
    classInput: string,
    errorInputClass?: string,
    placeholder: string,
    isError: boolean,
}

export const Input: React.FC<InputPropsType> = (props) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setCurrentValue(+event.currentTarget.value);
    }


    return (
        <input
            onChange={onChangeHandler}
            value={props.currentValue}
            className={`${props.classInput}  ${props.isError ? props.errorInputClass : ''}`}
            type={'number'}
            placeholder={props.placeholder}
        />
    )
}