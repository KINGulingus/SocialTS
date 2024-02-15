import classes from './Dialogs.module.css'
import DialogItem from "./DialogItme/Item";
import Message, {MessageType} from "./Message/Message";
import {DialogType} from "../../redux/store";
import React from "react";
import { Navigate } from "react-router-dom";

interface DialogsProps {
    updNewMessageDialog: (body: string) => void;
    sendMessageDialogs: () => void;
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    isAuth: boolean
}

const Dialogs: React.FC<DialogsProps> = ({
                                             updNewMessageDialog,
                                             sendMessageDialogs,
                                             dialogs,
                                             messages,
                                             newMessageBody,
                                             isAuth
                                         }) => {
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)


    let messagesElements = messages.map(m => <Message message={m.message}/>)


    let onSendMessageClick = () => {
        sendMessageDialogs()
    }
    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        updNewMessageDialog(body)
    }
    if (!isAuth) return <Navigate to={'/login'} />

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