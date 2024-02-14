import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/store";
import {getUsesProfile} from "../../redux/profile-reducer";
import {toggleIsFetching} from "../../redux/users-reducer";
import {RootState} from "../../redux/redux-store";
import {useParams} from "react-router-dom";

interface MapStatePropsType {
    profile: ProfileType
    match: {
        params: {
            userId: number;
        };
    }
   ;
}

interface MapDispatchPropsType {
    getUsesProfile: (userId:number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type ProfileProps = MapStatePropsType & MapDispatchPropsType


export function withRouter(Children:any) {
    return (props:ProfileProps) => {
        const match  = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component<ProfileProps, RootStateType> {


    componentDidMount() {
      
        let userId= this.props.match.params.userId
        if(!userId){
            userId = 2
        }
      this.props.getUsesProfile(userId)
    }

    render() {
        debugger
        return <>
            <div>
                <Profile {...this.props}/>
            </div>
        </>

    }

}

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        profile: state.profileReducer.profile
    } as MapStatePropsType
}
const WhitsUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUsesProfile, toggleIsFetching})(WhitsUrlContainerComponent)







