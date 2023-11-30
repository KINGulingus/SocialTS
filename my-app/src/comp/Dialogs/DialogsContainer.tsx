import Dialogs from "./Dialogs";
import {sendMessageDialogsAC, updNewMessageDialogAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {ActionsType} from "../../redux/store";
import {RootState} from "../../redux/redux-store";

//тут стоял any в типизации, а если бы нормально протипизировал то не ошибся бы с импортом, он не дал бы тебе напистаь не правильно
let mapStateToProps = (state:RootState) => {
    //если что то где то не приходит выставляешь консоли и смотришь что приходит или передаешь, так находишь где проебался
console.log(state,"state")
    return {
    //правильное обращение, твой стейт состоит из редьюсеров, а каждый редьюсер со свом стейтом
        //можно как ты хотел передать одним обьектом, получаается ты отдашь только dialogsReducer. но я раздробил сразу тут. потом у тебя разрастется редьюсер и он не нужен тебе будет весь тут
        dialogs:state.dialogsReducer.dialogs,
        messages:state.dialogsReducer.messages,
        newMessageBody:state.dialogsReducer.newMessageBody
    }
}
let mapDispatchToProps = (dispatch:(action: ActionsType) => void) => {
    return {
        updNewMessageDialog:(body:string)=>{
            dispatch(updNewMessageDialogAC(body))
        },
        sendMessageDialogs:()=>{
            dispatch(sendMessageDialogsAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;