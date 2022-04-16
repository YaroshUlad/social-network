import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css'

export const SideBar = () => {
    console.log(s)
    return (
        <div className={s.sideBar}>
            <div className={s.link}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={s.link}><NavLink to={'/dialogs'}>Dialogs</NavLink></div>
            <div className={s.link}><NavLink to={'/news'}>News</NavLink></div>
            <div className={s.link}><NavLink to={'/music'}>Music</NavLink></div>
            <div className={s.link}><NavLink to={'/settings'}>Settings</NavLink></div>
        </div>
    );
};

