export enum ActionTYPES {
    setUsers = 'SET_USERS_ACTION_TYPE',
    switchPage = 'SWITCH_PAGE_TO_CURRENT'
}

type UsersReducerActionsType = {
    type: string
    payload: {
        [key: string]: any
    }
}
type PhotosType = {
    small: string | null
    large: string | null
}
type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    followed: boolean
    status: string | null
}
export type stateType = {
    error: any
    users: UsersType[]
    totalCount: number
    currentPage: number
    pageSize: number
    loaded: boolean
}
const initialStateForUsersPageReducer = {
    pageSize: 10,
    currentPage: 1,
    loaded: false
} as stateType

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
export const switchPageAC = (currentPage: number) => {
    return {
        type: ActionTYPES.switchPage,
        payload: {
            currentPage
        }
    }
}


export const usersPageReducer = (state: stateType = initialStateForUsersPageReducer, action: UsersReducerActionsType) => {
    switch (action.type) {
        case ActionTYPES.setUsers :
            return {...state, ...action.payload,loaded: true}
        case ActionTYPES.switchPage :
            return {...state, ...action.payload, loaded: true}
        default:
            return state

    }
}