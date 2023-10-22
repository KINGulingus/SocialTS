import React from "react";
import MyPosts from "./My-Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, RootStateType} from "../../redux/State";

interface ProfileProps {
    state: RootStateType
    dispatch: (action: ActionsType) => void

}


const Profile = (props: ProfileProps) => {
    const {state} = props;

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={state.profilePage}
            dispatch={props.dispatch}/>

        </div>


    )
}
export default Profile;