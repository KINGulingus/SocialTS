import Header from "./Header";
import {RootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import React from "react";
import {getAuthUserData} from "../../redux/auth-reducer";

interface HeaderContainerPropsType {
    getAuthUserData: () => void

    login:string
    isAuth:boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, RootStateType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} login={this.props.login}/>

    }

}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);