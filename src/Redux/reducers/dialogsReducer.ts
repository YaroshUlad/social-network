import {ActionType, DialogsPageType} from "../Store";

export const addNewMessageActionType = 'ADD-NEW-MESSAGE'
export const updateNewMessageTextActionType = 'UPDATE-NEW-MESSAGE-TEXT'


export const dialogReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case addNewMessageActionType:
            const newMessage = [state.newMessageText]
            state.messages = state.messages.concat(newMessage)
            state.newMessageText = ''
            return state
        case updateNewMessageTextActionType:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}
export const createAddNewMessage = () => ({type: addNewMessageActionType})
export const createUpdateNewMessageTextAction = (newMessageText: string) => {
    return {type: updateNewMessageTextActionType, newMessageText: newMessageText}
}