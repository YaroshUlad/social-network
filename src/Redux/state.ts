

export type ActionType = {
    type: string
    [key: string]: any
}

export const addNewPostActionType = 'ADD-NEW-POST'
export const updateNewPostTextActionType = 'UPDATE-NEW-POST-TEXT'
export const addNewMessageActionType = 'ADD-NEW-MESSAGE'
export const updateNewMessageTextActionType = 'UPDATE-NEW-MESSAGE-TEXT'

export const createAddNewPostAction = () => ({type: addNewPostActionType})
export const createNewPostTextAction = (newPostText: string) => {
    return {type: updateNewPostTextActionType, newPostText:newPostText}
}
export const createAddNewMessage = () => ({type: addNewMessageActionType})
export const createUpdateNewMessageTextAction = (newMessageText: string) => {
    return { type: updateNewMessageTextActionType, newMessageText: newMessageText }
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

export let store = {
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
    _addPost() {
        const newPost = [this._state.profilePage.newPostText]
        this._state.profilePage.posts = newPost.concat(this._state.profilePage.posts)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree()
    },
    _updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._rerenderEntireTree()
    },
    _addNewMessage() {
        const newMessage = [this._state.dialogsPage.newMessageText]
        this._state.dialogsPage.messages = this._state.dialogsPage.messages.concat(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._rerenderEntireTree()
    },
    _updateNewMessageText(newMessageText: string) {
        this._state.dialogsPage.newMessageText = newMessageText
        this._rerenderEntireTree()
    },
    dispatch(action: ActionType) {
        switch (action.type) {
            case addNewPostActionType:
                this._addPost();
                break
            case updateNewPostTextActionType:
                this._updateNewPostText(action.newPostText)
                break
            case addNewMessageActionType:
                this._addNewMessage()
                break
            case updateNewMessageTextActionType:
                this._updateNewMessageText(action.newMessageText)
                break
            default:
                console.log('Unknown action type')
                break

        }
    }
}

/*export let state = {
    posts: ['first post', 'Hello im here', 'whats up?', 'im lucky', 'Privet'],
    dialogsPage: {
        dialogs: ['Andrew', 'Ivan', 'Oleg', 'Maria', 'Katya'],
        messages: ['Hello', 'How are you?', 'Im fine', 'its cool']
    }
}*/