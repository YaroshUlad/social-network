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
                    <div><NavLink to={`dialog/${index}`}>{el}</NavLink></div>
                )
            })}


        </div>
    )
}