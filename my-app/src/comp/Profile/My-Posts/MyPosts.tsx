import React, {useRef} from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostType} from "../../../redux/store";

interface MyPostsProps {
    updateNewPostText: (updateNewtext: string) => void
    addPost: () => void
    posts: PostType[]
    messageForNewPost: string
}

const MyPosts = (props: MyPostsProps) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const onAddPost = () => {
        if (newPostEl.current !== null) {
            props.addPost()
        }
    }
    const onPostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let updateNewtext = event.currentTarget.value;
        props.updateNewPostText(updateNewtext)
    }

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostEl}
                        value={props.messageForNewPost}
                        onChange={onPostChange}
                    />

                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;