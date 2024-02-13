import {sendMessageDialogsAC, updNewMessageDialogAC} from "./dialogs-reducer";
import {addPostAC, changePostAC, setUserProfile} from "./profile-reducer";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    unfollow,
    setTotalUsersCount, toggleFollowingProgress
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";

type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
    profile: ProfileType
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type UsersPageType = {
    users: Array<UsersType>
}

export type UsersType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarType = {}
export type RootStateType = {
    profileReducer: ProfilePageType
    dialogsReducer: DialogPageType
    sidebarReducer: SidebarType
    usersReducer: UsersPageType
}

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof updNewMessageDialogAC>
    | ReturnType<typeof sendMessageDialogsAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>