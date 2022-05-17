import React from 'react';
import {Dialogs} from "./Dialogs/Dialogs";
import {Messages} from "./Messages/Messages";
import s from './DialogsPage.module.css'
import {ActionType, DialogsPageType} from '../../../Redux/Store';

type DialogsPagePropsType = {
    data:DialogsPageType
    dispatch: (action: ActionType)=> void
}

export const DialogsPage = (props: DialogsPagePropsType) => {
    return (
        <div className={s.wrapper}>
            <Dialogs dialogs={props.data.dialogs}/>
            <Messages dispatch={props.dispatch} messages={props.data.messages} value={props.data.newMessageText}/>
        </div>
    );
};

