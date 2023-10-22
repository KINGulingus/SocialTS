import {DialogPageType, ActionsType} from "./State";

export const dialogsReducer = (dialogs: DialogPageType, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            dialogs.newMessageBody = action.body;
            return dialogs;
        case 'SEND-MESSAGE':
            let body = dialogs.newMessageBody
            dialogs.newMessageBody = ''
            dialogs.messages.push({id: 6, message: body})
            return dialogs;
        default:return dialogs
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