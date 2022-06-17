export enum ActionTYPES {
    getUses='GET_USERS_ACTION_TYPE'
}

type UsersReducerActionsType = {
    type: string
    payload: {
        [key: string]: any
    }
}


const initialStateForUsersPageReducer = {

}

export const usersPageReducer = (state = initialStateForUsersPageReducer, action: UsersReducerActionsType) => {
    switch (action.type) {
        case ActionTYPES.getUses :
            return {...state}

        default:
            return state

    }
}