import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    dialogs: string[]
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.wrapper}>
            {props.dialogs.map((el,index)=>{
                return(
                    <div><NavLink className={s.wrapperActive} to={`dialogs/${index + el}`}>{el}</NavLink></div>
                )
            })}


        </div>
    )
}