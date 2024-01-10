import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ActionsType, RootStateType, UsersType} from "../../redux/store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

interface UsersProps {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalUsersCount:(totalCount:number)=>void
    setCurrentPage: (currentPage: number) => void
    pageSize: number,
    totalUserCount: number,
    currentPage:number
}

class UsersAPIComponent extends React.Component<UsersProps, RootStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.setCurrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUsers={this.props.setUsers}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setCurrentPage={this.props.setCurrentPage}
            pageSize={this.props.pageSize}
            totalUserCount={this.props.totalUserCount}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}

        />
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersReducer.users,
        pageSize:state.usersReducer.pageSize,
        totalUserCount:state.usersReducer.totalUserCount,
        currentPage: state.usersReducer.currentPage
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
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export default UsersContainer


/*export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "67456724-8867-48c2-b789-63a99d888cba"
    }
});*/

//less56