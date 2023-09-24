import React from "react";
import MyPosts from "./My-Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../redux/State";

interface ProfileProps {
    state: RootStateType;
}


const Profile= (props:ProfileProps) => {
    const { state } = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={state} />
        </div>


    )
}
export default Profile;