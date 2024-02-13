import {ActionsType, UsersType} from "./store";


type InitialStateType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}
let initialState: InitialStateType = {
    users: [],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 5,
    isFetching: false,
    followingInProgress: []
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
        case "TOGGLE-IS-FETCHING":
            return {...usersList, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...usersList,
                followingInProgress: action.isFetching
                    ? [...usersList.followingInProgress, action.userId]
                    : usersList.followingInProgress.filter(id => id !== action.userId)
            }


        default:
            return usersList

    }
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
export const setTotalUsersCount = (totalUserCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        count: totalUserCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching: isFetching,
        userId: userId
    } as const
}