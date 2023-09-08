import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItme/Item";
import Message from "./Message/Message";
import {dialogs, messages} from "../../index";



const Dialogs= () => {



    let dialogsElements = dialogs.map(d=><DialogItem name={d.name} id={d.id}/> )


    let messagesElements= messages
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