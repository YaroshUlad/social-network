import {ActionType, ProfilePageType} from "../Store";

export const addNewPostActionType = 'ADD-NEW-POST'
export const updateNewPostTextActionType = 'UPDATE-NEW-POST-TEXT'

export const createAddNewPostAction = () => ({type: addNewPostActionType})
export const createNewPostTextAction = (newPostText: string) => {
    return {type: updateNewPostTextActionType, newPostText: newPostText}
}

type StateType = {
    post: string[]
    newPostText: string
}
const initialState = {
    posts: ['first post', 'Hello im here', 'whats up?', 'im lucky', 'Privet'],
    newPostText: ''
}



export const profileReducer = (state:ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case addNewPostActionType:
            const newPost = [state.newPostText]
            state.posts = newPost.concat(state.posts)
            state.newPostText = ''
            return {...state}
        case updateNewPostTextActionType:
            state.newPostText = action.newPostText
            return {...state}
        default:
            return state
    }
}
