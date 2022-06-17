import React from 'react';
import s from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {FullStateType} from "../../../Redux/Store";
import axios from 'axios';

export const Users = () => {
    const dispatch = useDispatch()
    const state = useSelector<FullStateType, any>(state=> state.usersPage)

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response)=>{
            console.log(response.data.items[0])
        })

    return (
        <div className={s.wrapper}>
            users
        </div>
    );
};
