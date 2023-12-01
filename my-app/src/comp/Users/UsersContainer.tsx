import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {RootState} from "../../redux/redux-store";
import {ActionsType, UsersType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersReducer.users
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {

    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>)=>{
            dispatch(setUsersAC(users))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer