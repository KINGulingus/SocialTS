import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItme/Item";
import Message from "./Message/Message";
import {sendMessageDialogsAC,updNewMessageDialogAC} from "../../redux/dialogs-reducer";
import {ActionsType, StoreType} from "../../redux/store";

interface DialogsProps {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

//тут ты получаешь пропс и синтаксисом сразу раскрываешь его
const Dialogs = (props: DialogsProps) => {
    const state = props.store.getState().dialogsReducer;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)


    let messagesElements = state.messages
        .map(m => <Message message={m.message}/>)

    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.dispatch(sendMessageDialogsAC())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.store.dispatch(updNewMessageDialogAC(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder={"Enter your message"}></textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;