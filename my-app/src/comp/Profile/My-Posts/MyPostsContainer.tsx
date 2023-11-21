import React from "react";
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {

                let state = store.getState().profileReducer
                const addPost = () => {
                    store.dispatch(addPostAC(''))
                }

                const onChangeHandler = (updateNewtext: string) => {
                    let action = changePostAC(updateNewtext)
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onChangeHandler}
                                addPost={addPost}
                                posts={state.posts}
                                messageForNewPost={state.messageForNewPost}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;