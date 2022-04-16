import React from 'react';
import {Dialogs} from "./Dialogs/Dialogs";
import {Messages} from "./Messages/Messages";
import s from './DialogsPage.module.css'
import {DialogsPageType} from "../../../App";

type DialogsPagePropsType = {
    data:DialogsPageType
}

export const DialogsPage = (props: DialogsPagePropsType) => {
    return (
        <div className={s.wrapper}>
            <Dialogs dialogs={props.data.dialogs}/>
            <Messages messages={props.data.messages}/>
        </div>
    );
};

