import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    classInput: string,
    errorInputClass?: string,
    placeholder: string,
    isError: boolean,
    currentValue:number,
    setCurrentValue:(value:number)=>void,
}

export const Input:React.FC<InputPropsType> = (props) => {
    const [value, setValue] = useState<number>(props.currentValue);

    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=> {
        setValue(+event.currentTarget.value);
        props.setCurrentValue(+event.currentTarget.value);
    }

    return (
        <input
            onChange={onChangeHandler}
            value={value}
            className={`${props.classInput}  ${props.isError ? props.errorInputClass : ''}`}
            type={'number'}
            placeholder={props.placeholder}
        />
    )
}