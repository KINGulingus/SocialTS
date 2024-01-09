import {connect} from "react-redux";
import Users from "./UsersC";
import {RootState} from "../../redux/redux-store";
import {ActionsType, UsersType} from "../../redux/store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersReducer.users,
        pageSize:state.usersReducer.pageSize,
        totalUserCount:state.usersReducer.totalUserCount,
        setCurrentPage: state.usersReducer.currentPage
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer