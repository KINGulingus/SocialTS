import React from "react";
import MyPosts from "./My-Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, RootStateType} from "../../redux/State";

interface ProfileProps {
    state: RootStateType;
    addPost:(postMessage:string)=>void
}


const Profile= (props:ProfileProps) => {
    const { state } = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={state}  addPost={addPost} />
        </div>


    )
}
export default Profile;