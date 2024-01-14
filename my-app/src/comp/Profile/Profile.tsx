import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My-Posts/MyPostsContainer";
import {ProfileType} from "../../redux/store";

interface ProfileProps {
    setUserProfile: (profile:ProfileType) => void
    profile: ProfileType
}

const Profile =(props:ProfileProps)=> {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>


    )
}
export default Profile;


//LESSON59