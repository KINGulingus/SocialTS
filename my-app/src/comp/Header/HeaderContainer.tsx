import Header from "./Header";
import axios from "axios";
import {RootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import React from "react";
import {setAuthUserData} from "../../redux/auth-reducer";

interface HeaderContainerPropsType {
    setAuthUserData: (id: number, email: string, login: string) => void
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, RootStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)

                }
                debugger
            })
    }

    render() {
        return <Header {...this.props} login={null}/>

    }

}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.data.login
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);