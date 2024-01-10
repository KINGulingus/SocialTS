import {ActionsType, UsersType} from "./store";

type InitialStateType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
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
            return {...usersList, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...usersList, currentPage: action.currentPage}
        case "SET-USERS-TOTAL-COUNT":
            return {...usersList, totalUserCount: action.count}
        default:
            return usersList

    }
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
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
export const setUsersTotalCountAC = (totalUserCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        count: totalUserCount
    } as const
}