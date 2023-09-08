import React from "react";
import MyPosts from "./My-Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state from "../../redux/State";

const Profile:React.FC<any> = (props=state.profilePage) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts />
        </div>


    )
}
export default Profile;