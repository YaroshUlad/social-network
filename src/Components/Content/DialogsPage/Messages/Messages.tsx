import React from 'react';
import s from './Messages.module.css'

type MessagesPropsType = {
    messages:string[]
}

export const Messages = (props:MessagesPropsType) => {
    return (
        <div className={s.wrapper}>
            {props.messages.map(el=>{
                return(
                    <div className={s.message}>{el}</div>
                )
            })}
        </div>
    )
}