import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/store";
import Preloader from "../../common/Preloader/Preloader";

interface ProfileInfoProps{
    profile: ProfileType
}

const ProfileInfo = (props:ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>

            <div>
                <img
                    src='https://papik.pro/uploads/posts/2021-11/thumbs/1636167572_24-papik-pro-p-scp-logotip-foto-25.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>

            </div>
            <span>{props.profile.aboutMe}</span>

        </div>


    )
}
export default ProfileInfo;