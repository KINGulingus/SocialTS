import React from "react";
import MyPosts from "./My-Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";

interface ProfileProps {
    profilePage:ProfilePageType
    dispatch: (action: ActionsType) => void

}


const Profile = (props: ProfileProps) => {
    const {profilePage} = props;

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
            dispatch={props.dispatch}/>

        </div>


    )
}
export default Profile;