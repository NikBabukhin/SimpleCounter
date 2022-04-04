import React from "react";

type ButtonPropsType = {
    extraClass?: string
    onClickHandler: () => void,
    isDisabled: boolean,
    name: string
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button
            className={`button ${props.extraClass}`}
            onClick={props.onClickHandler}
            disabled={props.isDisabled}>{props.name}</button>
    )
}
