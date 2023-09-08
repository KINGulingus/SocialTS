import React from "react";
import classes from "./Post.module.css";

type PropsType = {
    message: string
    likes?:number
}



const Post = (props: PropsType) => {

    return (
        <div className={classes.item}>

            <img src='https://cdn.pixabay.com/photo/2021/05/23/21/42/amogus-6277360_1280.png'/>
            {props.message}
            <div>
                <span>Likes </span> {props.likes}
            </div>

        </div>
    )
}
export default Post;