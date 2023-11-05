import {ActionsType, ProfilePageType} from "./store";

let initialState =  {
        posts: [
            {id: 1, message: 'WADDUB BUDDY', likes: 33},
            {id: 2, message: 'Oh !', likes: 88},
            {id: 3, message: 'hi ', likes: 14},
            {id: 4, message: 'Mark!', likes: 88},
        ],
        messageForNewPost: 'Hello hihi'
    };


export const profileReducer = (profile=initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: 5,
                message: profile.messageForNewPost,
                likes: 0
            };
            profile.posts.push(newPost)
            profile.messageForNewPost = ''
            return profile;
        case 'UPDATE-NEW-POST-TEXT':
            profile.messageForNewPost = action.newText
            return profile;
        default:
            return profile

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