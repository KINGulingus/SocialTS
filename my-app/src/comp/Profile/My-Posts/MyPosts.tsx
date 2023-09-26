import React, {useRef} from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import {RootStateType} from "../../../redux/State";

interface MyPostsProps {
    state: RootStateType
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsProps) => {
    const {state} = props


    let postsElements = state.profilePage.posts
        .map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostEl.current !== null) {
            props.addPost(newPostEl.current.value)
            newPostEl.current.value=''

        }

    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;