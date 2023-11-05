import {combineReducers, legacy_createStore as createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


 let reducers = combineReducers({
     profileReducer,
     dialogsReducer,
     sidebarReducer
 })

let store = createStore(reducers);



export default store

//10:58 42 samurai