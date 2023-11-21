import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageDialogsAC, updNewMessageDialogAC} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>{
        (store) => {
            const state = store.getState().dialogsReducer;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageDialogsAC())
            }
            let onNewMessageChange = (body: any) => {
                store.dispatch(updNewMessageDialogAC(body))
            }

            return <Dialogs updNewMessageDialog={onNewMessageChange} sendMessageDialogs={onSendMessageClick}
                            dialogsPage={state}/>
        }}
    </StoreContext.Consumer>
}


export default DialogsContainer;