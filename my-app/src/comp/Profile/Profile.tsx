import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import MyPostsContainer from "./My-Posts/MyPostsContainer";

interface ProfileProps {
    store: StoreType
}


const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>

        </div>


    )
}
export default Profile;