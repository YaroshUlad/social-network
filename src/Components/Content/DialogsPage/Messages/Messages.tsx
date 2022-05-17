import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Messages.module.css'
import {ActionType} from "../../../../Redux/Store";
import {createAddNewMessage, createUpdateNewMessageTextAction} from "../../../../Redux/reducers/dialogsReducer";

type MessagesPropsType = {
    messages:string[]
    value: string
    dispatch: (action: ActionType)=> void
}

export const Messages = (props:MessagesPropsType) => {

    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newAction = createUpdateNewMessageTextAction(e.currentTarget.value)
        props.dispatch(newAction)
    }
    const addNewMessage = () => {
        const newAction = createAddNewMessage()
        props.dispatch(newAction)
    }

    const onEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter'){
            addNewMessage()
        }
    }

    return (
        <div className={s.wrapper}>
            {props.messages.map(el=>{
                return(
                    <div className={s.message}>{el}</div>

                )
            })}
            <div>
                <textarea onKeyPress={onEnterPress}  onChange={updateNewMessageText} value={props.value}/>
                <button onClick={addNewMessage}>send message</button>
            </div>
        </div>
    )
}