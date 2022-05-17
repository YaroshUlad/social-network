import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {Profile} from "./Profile/Profile";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import { DialogsPage } from './DialogsPage/DialogsPage';
import {AppPropsType} from "../../App";



export const Content = (props: AppPropsType) => {
    return (
        <div>
            <Routes>
                <Route path={'/profile/*'} element={<Profile dispatch={props.dispatch} profileData={props.data.profilePage}/>} />
                <Route path={'/dialogs/*'} element={<DialogsPage dispatch={props.dispatch} data={props.data.dialogsPage}/>} />
                <Route path={'/music/*'} element={<Music/>} />
                <Route path={'/news/*'} element={<News/>} />
                <Route path={'/settings/*'} element={<Settings/>} />
            </Routes>
        </div>
    );
};

