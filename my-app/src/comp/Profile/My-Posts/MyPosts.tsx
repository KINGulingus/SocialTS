import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import {posts} from "../../../index";

const MyPosts = () => {



    let postsElements = posts
        .map(p => <Post message={p.message} likes={p.likes}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;