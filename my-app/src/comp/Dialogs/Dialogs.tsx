import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItme/Item";
import Message from "./Message/Message";
import {RootStateType} from "../../redux/State";

interface DialogsProps{
    state:RootStateType
}

//тут ты получаешь пропс и синтаксисом сразу раскрываешь его
const Dialogs= (props:DialogsProps) => {
const {state}=props;

    let dialogsElements = state.dialogsPage.dialogs.map(d=><DialogItem name={d.name} id={d.id}/> )


    let messagesElements= state.dialogsPage.messages
        .map(m=> <Message message={m.message}/>)



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;