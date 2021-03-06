import {profileReducer} from "./reducers/profileReducer";
import {dialogReducer} from "./reducers/dialogsReducer";
import { combineReducers, createStore } from "redux";
import {usersPageReducer} from "./reducers/usersPageReducer";


export type ActionType = {
    type: string
    [key: string]: any
}



export type ProfilePageType = {
    posts: string[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: string[]
    messages: string[]
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export let rootReducer = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        usersPage: usersPageReducer,
    }
)

export type FullStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)


//@ts-ignore
window.store = store

/*
export let store1 = {
    _state: {
        profilePage: {
            posts: ['first post', 'Hello im here', 'whats up?', 'im lucky', 'Privet'],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: ['Andrew', 'Ivan', 'Oleg', 'Maria', 'Katya'],
            messages: ['Hello', 'How are you?', 'Im fine', 'its cool'],
            newMessageText: ''
        }
    },
    _subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {

    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage,action)
        this._rerenderEntireTree()
    }
}

*/




