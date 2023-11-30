import {ActionsType} from "./store";

let initialState = {
    dialogs: [
        {id: 1, name: "Gleb"},
        {id: 2, name: "Slava"},
        {id: 3, name: "Sanya"},
        {id: 4, name: "Bim"},
        {id: 5, name: "Max"}
    ],
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "how"},
        {id: 3, message: "are"},
        {id: 4, message: "you"},
        {id: 5, message: "bitch"}
    ],
    newMessageBody: ''
};

export const dialogsReducer = (dialogs = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...dialogs,
                newMessageBody: action.body
            }
        case 'SEND-MESSAGE':
            let body = dialogs.newMessageBody
            return {
                ...dialogs,
                newMessageBody: '',
                messages: [...dialogs.messages, {id: 6, message: body}]
            }
        default:
            return dialogs
    }
}
export const updNewMessageDialogAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const sendMessageDialogsAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}