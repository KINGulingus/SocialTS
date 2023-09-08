import React from "react";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likes: number
}
type ProfilePageType = {
    posts: Array<PostType>
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}
type SidebarType = {}
type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
    sideBar:SidebarType
}
let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'WADDUB BUDDY', likes: 33},
            {id: 2, message: 'Oh !', likes: 88},
            {id: 3, message: 'hi ', likes: 14},
            {id: 4, message: 'Mark!', likes: 88},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Gleb"},
            {id: 2, name: "Slava"},
            {id: 3, name: "Sanya"},
            {id: 4, name: "Bim"},
            {id: 5, name: "Max"}
        ],
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "how"},
            {id: 3, message: "are"},
            {id: 4, message: "you"},
            {id: 5, message: "bitch"}
        ]
    },
    sideBar: {}
}

export default state;