import Dialogs from "./Dialogs";
import {sendMessageDialogsAC, updNewMessageDialogAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {ActionsType} from "../../redux/store";
import {RootState} from "../../redux/redux-store";

let mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageBody: state.dialogsReducer.newMessageBody,
        isAuth: state.authReducer.isAuth
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        updNewMessageDialog: (body: string) => {
            dispatch(updNewMessageDialogAC(body))
        },
        sendMessageDialogs: () => {
            dispatch(sendMessageDialogsAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;