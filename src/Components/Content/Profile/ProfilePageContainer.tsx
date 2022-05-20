import {ActionType, StateType} from "../../../Redux/Store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {createAddNewPostAction, createNewPostTextAction} from "../../../Redux/reducers/profileReducer";


const mapProfileDataToProps = (state: StateType) => {
    return {
        value: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: () => dispatch(createAddNewPostAction()),
        updateNewPostText: (text: string) => dispatch(createNewPostTextAction(text))
    }
}

export const ProfilePageContainer = connect(mapProfileDataToProps, mapDispatchToProps)(Profile)