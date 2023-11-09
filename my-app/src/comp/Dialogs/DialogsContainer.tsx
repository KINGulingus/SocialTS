import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItme/Item";
import Message from "./Message/Message";
import {sendMessageDialogsAC,updNewMessageDialogAC} from "../../redux/dialogs-reducer";
import {ActionsType, StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

interface DialogsProps {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const DialogsContainer = (props: DialogsProps) => {
    const state = props.store.getState().dialogsReducer;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageDialogsAC())
    }
    let onNewMessageChange = (body:any) => {
        props.store.dispatch(updNewMessageDialogAC(body))
    }

    return (
       <Dialogs updNewMessageDialog={onNewMessageChange} sendMessageDialogs={onSendMessageClick} dialogsPage={state}/>
    )
}

export default DialogsContainer;