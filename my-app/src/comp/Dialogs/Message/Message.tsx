import React, {useRef} from "react";
import classes from './../Dialogs.module.css'

export type MessageType = {
    message: string
}

const Message = (props: MessageType) => {

    let newMessageEl=useRef<HTMLTextAreaElement>(null)

    const sendMessage=()=>{
        if(newMessageEl.current !==null){
            alert(newMessageEl.current.value)
        }
    }

    return(
    <div>
        <div className={classes.message}>{props.message}</div>
        <div><textarea ref={newMessageEl}></textarea></div>
        <div><button onClick={sendMessage}>Send Message</button></div>
    </div>
)}


export default Message;