import React, {useCallback, useEffect, useState} from 'react';
import s from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {FullStateType} from "../../../Redux/Store";
import {usersAPI} from "../../../api/usersAPI";
import {setUsersAC, stateType, switchPageAC} from "../../../Redux/reducers/usersPageReducer";

export const Users = () => {
    console.log('rend users')
    const [page, setPage] = useState<number>(1)
    const dispatch = useDispatch()
    const state = useSelector<FullStateType, stateType>(state => state.usersPage)
    const totalCount = useSelector<FullStateType, number>(state => state.usersPage.totalCount)
    const currentPage = useSelector<FullStateType, number>(state => state.usersPage.currentPage)
    const pageSize = useSelector<FullStateType, number>(state => state.usersPage.pageSize)
    const loaded = useSelector<FullStateType, boolean>(st => st.usersPage.loaded)

    const pageCount = useCallback(()=>Math.ceil(totalCount / pageSize),[])
    useEffect(() => {
        console.log('log from useEffect1')
        usersAPI.getUsers(1, 10)
            .then(res => {
                //debugger
                dispatch(setUsersAC(res.items, res.totalCount))
            })

    }, [])
    useEffect(() => {
        console.log('log from useEffect2')
        usersAPI.getUsers(currentPage, 10)
            .then(res => {
                //debugger
                dispatch(setUsersAC(res.items, res.totalCount))
            })

    }, [currentPage])

    const switchPage = (newPage: number) => {
        dispatch(switchPageAC(newPage))
    }

    return (
        <div className={s.wrapper}>
            currenPage: {currentPage ? currentPage : 1}
            <div>
                <button onClick={() => switchPage(currentPage - 1)}>pr</button>
                <button onClick={() => switchPage(currentPage + 1)}>frw</button>
                <input type="number" value={page} onChange={(e) => setPage(+e.currentTarget.value)} min={1}/>
                <button onClick={() => switchPage(page)}>setPage</button>
                {Math.ceil(totalCount / pageSize)}
            </div>
            <div>
                {loaded && state.users.map(el => {
                    return <div key={el.id}>
                        <span>{el.name}</span>
                        <button>{el.followed ? 'unfollow' : 'follow'}</button>
                    </div>
                })}
            </div>


        </div>
    );
};
