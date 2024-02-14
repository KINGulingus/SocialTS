import {ActionsType} from "./store";
import {authAPI} from "../api/api";


let initialState = {
    id: 1,
    email: '123@gmail.com',
    login: '123',
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state

    }
}

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login}
    } as const
}
export const getAuthUserData = () => {

    return (dispatch: (action: ActionsType) => void) => {

        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))

                }
            })
    }
}

