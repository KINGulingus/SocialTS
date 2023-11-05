import React, {useRef} from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";
import {ActionsType, ProfilePageType} from "../../../redux/store";

interface MyPostsProps {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsProps) => {
    const {profilePage} = props

    let postsElements = profilePage.posts
        .map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostEl.current !== null) {
            props.dispatch(addPostAC(''))
        }
    }
    const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let updateNewtext = event.currentTarget.value;
        props.dispatch(changePostAC(updateNewtext))
    }

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostEl}
                        value={profilePage.messageForNewPost}
                        onChange={onChangeHandler}
                    />

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