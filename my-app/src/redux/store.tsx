import sidebarReducer from "./sidebar-reducer";
import {dialogsReducer, sendMessageDialogsAC, updNewMessageDialogAC} from "./dialogs-reducer";
import {addPostAC, changePostAC, profileReducer} from "./profile-reducer";

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
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sideBar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    updateNewText: (newText: string) => void
    addPost: (postText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    dispatch: (action: ActionsType) => void
}
export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof updNewMessageDialogAC>
    | ReturnType<typeof sendMessageDialogsAC>

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'WADDUB BUDDY', likes: 33},
                {id: 2, message: 'Oh !', likes: 88},
                {id: 3, message: 'hi ', likes: 14},
                {id: 4, message: 'Mark!', likes: 88},
            ],
            messageForNewPost: 'Hello hihi'
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
            ],
            newMessageBody: ''
        },

        sideBar: {}
    },
    _callSubscriber(state: RootStateType) {
        console.log('State Changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },

    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.messageForNewPost,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.messageForNewPost = ''
        this._callSubscriber(this._state)
    },
    updateNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)
    }
}




export default store;