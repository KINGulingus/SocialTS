import React from "react";
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";

interface MyPostsProps {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsProps) => {
    let state = props.store.getState().profileReducer

    const addPost = () => {
        props.store.dispatch(addPostAC(''))
    }

    const onChangeHandler = (updateNewtext: string) => {
        let action = changePostAC(updateNewtext)
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onChangeHandler} addPost={addPost} posts={state.posts}
                 messageForNewPost={state.messageForNewPost}/>
    )
}
export default MyPostsContainer;