import React from "react";
import s from './ErrorMessage.module.css'

type ErrorMessagePropsType = {
    message: string
}

export const ErrorMessage:React.FC<ErrorMessagePropsType>=({message})=> {
    return (
         <span className={s.error__span}>{message}</span>
    )
}