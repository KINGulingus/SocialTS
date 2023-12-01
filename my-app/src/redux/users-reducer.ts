import {ActionsType, UsersType} from "./store";

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://sun1-87.userapi.com/s/v1/ig2/CIQPJ2npWfSGtjUQvaYMSmI1rCRPby-J4WO3_IpjjBRkjLdGrhqa2fBiMsrn4o37q6c_LjbyqeC2GZmZ7vdrWHPC.jpg?size=200x200&quality=96&crop=26,64,697,697&ava=1',
            followed: true,
            fullName: 'Gleb',
            status: 'suck mA cOkC',
            location: {city: 'Vitebsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://sun1-87.userapi.com/s/v1/ig2/CIQPJ2npWfSGtjUQvaYMSmI1rCRPby-J4WO3_IpjjBRkjLdGrhqa2fBiMsrn4o37q6c_LjbyqeC2GZmZ7vdrWHPC.jpg?size=200x200&quality=96&crop=26,64,697,697&ava=1',
            followed: false,
            fullName: 'Kyok',
            status: 'LiCk mY bAlLs',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://sun1-87.userapi.com/s/v1/ig2/CIQPJ2npWfSGtjUQvaYMSmI1rCRPby-J4WO3_IpjjBRkjLdGrhqa2fBiMsrn4o37q6c_LjbyqeC2GZmZ7vdrWHPC.jpg?size=200x200&quality=96&crop=26,64,697,697&ava=1',
            followed: true,
            fullName: 'Slave',
            status: 'Suck`em rock`em',
            location: {city: 'Bamberg', country: 'Germany'}
        },
    ]
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