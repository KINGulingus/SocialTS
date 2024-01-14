import {ActionsType, PostType, ProfileType} from "./store";

type InitialStateType={
    posts: Array<PostType>,
    messageForNewPost: string
    profile:ProfileType | null,
}

let initialState:InitialStateType = {
    posts: [
        {id: 1, message: 'WADDUB BUDDY', likes: 33},
        {id: 2, message: 'Oh !', likes: 88},
        {id: 3, message: 'hi ', likes: 14},
        {id: 4, message: 'Mark!', likes: 88},
    ],
    messageForNewPost: 'Hello hihi',
    profile:null
};


export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: 5,
                message: state.messageForNewPost,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            };
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                messageForNewPost: action.newText
            }
        }
        case 'SET-USER-PROFILE': {
            return{...state,profile:action.profile}
        }
        default:
            return state

    }
}

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const changePostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export const setUserProfile = (profile:ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}