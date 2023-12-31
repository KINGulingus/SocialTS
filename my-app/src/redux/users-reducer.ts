import {ActionsType, UsersType} from "./store";

type InitialStateType={
    users:Array<UsersType>
}

let initialState:InitialStateType = {
    users: []
};


export const usersReducer = (usersList = initialState, action: ActionsType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...usersList,
                users: usersList.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...usersList,
                users: usersList.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {...usersList,users:[...usersList.users,...action.users]}
        default:
            return usersList

    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}