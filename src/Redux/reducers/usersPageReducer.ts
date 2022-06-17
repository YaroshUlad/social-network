export enum ActionTYPES {
    setUsers='SET_USERS_ACTION_TYPE'
}

type UsersReducerActionsType = {
    type: string
    payload: {
        [key: string]: any
    }
}
type PhotosType = {
    small: string|null
    large: string|null
}
type UsersType = {
    name: string
    id: number
    uniqueUrlName: string|null
    photos: PhotosType
    followed: boolean
    status: string|null
}
type stateType = {
    error: any
    users: UsersType[]
    totalCount: number
}
const initialStateForUsersPageReducer = {

}as stateType

export const setUsersAC = (users: UsersType[], totalCount: number) => {
    return {
        type: ActionTYPES.setUsers,
        payload: {
            error: null,
            users,
            totalCount,
        }
    }
}


export const usersPageReducer = (state: stateType = initialStateForUsersPageReducer, action: UsersReducerActionsType) => {
    switch (action.type) {
        case ActionTYPES.setUsers :
            return {...state, ...action.payload}

        default:
            return state

    }
}