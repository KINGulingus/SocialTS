import { sendMessageDialogsAC, updNewMessageDialogAC} from "./dialogs-reducer";
import {addPostAC, changePostAC} from "./profile-reducer";

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
}

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof updNewMessageDialogAC>
    | ReturnType<typeof sendMessageDialogsAC>
