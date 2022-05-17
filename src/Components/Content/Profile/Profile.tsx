import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import {ActionType, ProfilePageType} from "../../../Redux/Store";
import {createAddNewPostAction, createNewPostTextAction} from "../../../Redux/reducers/profileReducer";

type ProfilePropsType = {
    profileData: ProfilePageType
    dispatch: (action: ActionType)=> void
}

export const Profile = (props: ProfilePropsType) => {

    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newAction = createNewPostTextAction(e.currentTarget.value)
        props.dispatch(newAction)
    }

    const addNewPost = () => {
        const newAction = createAddNewPostAction()
        props.dispatch(newAction)
    }
    const onKeyHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter') {
            addNewPost()
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.wallpaper}>
                <img
                    src='https://thumbs.dreamstime.com/b/%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B0-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D0%BE%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%B9-%D0%B7%D0%B0%D1%82%D1%80%D0%B0%D0%BF%D0%B5%D0%B7%D0%BD%D0%BE%D0%B9-%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87%D0%BD%D0%BE%D0%B9-%D1%81%D1%82%D0%B5%D0%BD%D1%8B-%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%B0%D1%8F-%D1%82%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F-%D1%84%D0%BE%D0%BD-%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D1%83%D1%8E%D1%89%D0%B8%D0%B9-%D1%84%D0%B0%D0%BA%D1%82%D0%BE%D1%80-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D1%8B-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0-211235605.jpg'
                    alt="wallpaper"/>
            </div>
            <div className={s.user}>
                <img src="https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg"
                     alt="userLogo"/>
                <div className={s.userDescription}>
                    <div>user name</div>
                    <div>user status</div>
                </div>
            </div>
            <div className={s.posts}>
                My Posts
                <div className={s.enterNewPost}>
                    <textarea onKeyPress={onKeyHandler} value={props.profileData.newPostText} onChange={updateNewPostText} placeholder={'enter new post here'}/>
                    <button onClick={addNewPost} >add</button>
                </div>
                <Posts posts={props.profileData.posts}/>
            </div>
        </div>
    );
};

