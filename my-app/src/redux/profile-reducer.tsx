import {ActionsType, ProfilePageType} from "./State";


export const profileReducer = (profile: ProfilePageType, action: ActionsType) => {
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