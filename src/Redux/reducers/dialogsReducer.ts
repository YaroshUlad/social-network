import {ActionType, DialogsPageType} from "../Store";

export const addNewMessageActionType = 'ADD-NEW-MESSAGE'
export const updateNewMessageTextActionType = 'UPDATE-NEW-MESSAGE-TEXT'
export const createAddNewMessage = () => ({type: addNewMessageActionType})
export const createUpdateNewMessageTextAction = (newMessageText: string) => {
    return {type: updateNewMessageTextActionType, newMessageText: newMessageText}
}


const initialState = {
    dialogs: ['Andrew', 'Ivan', 'Oleg', 'Maria', 'Katya'],
    messages: ['Hello', 'How are you?', 'Im fine', 'its cool'],
    newMessageText: ''
}

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
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
