import React from "react";
import classes from "./ProfileInfo.module.css";
import MyPosts from "../My-Posts/MyPosts";
import Profile from "../Profile";


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img
                    src='https://papik.pro/uploads/posts/2021-11/thumbs/1636167572_24-papik-pro-p-scp-logotip-foto-25.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>

        </div>


    )
}
export default ProfileInfo;