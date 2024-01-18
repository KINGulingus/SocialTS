import {ActionsType} from "./store";


let initialState = {
    data: {
        id: null,
        email: null,
        login: null
    },
    resultCode: null,
    messages: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            debugger
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

