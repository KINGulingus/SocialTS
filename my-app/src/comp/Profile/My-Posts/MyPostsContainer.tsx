// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ActionsType} from "../../../redux/store";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";


let mapStateToProps = (state:RootState)=>{
    return{
        posts:state.profileReducer.posts,
        messageForNewPost:state.profileReducer.messageForNewPost
    }
}

let mapDispatchToProps =(dispatch:(action: ActionsType) => void)=>{
    return{
        updateNewPostText:(updateNewtext: string)=>{
            let action = changePostAC(updateNewtext)
            dispatch(action)
        },
        addPost:()=>{
            dispatch(addPostAC(''))
        }
    }
}

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;