import {AnyAction, combineReducers, legacy_createStore as createStore, Store} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

// Определение типа для состояния хранилища
//typeof сам генерит типизацию на основе reducers , не пиши any
export type RootState = ReturnType<typeof reducers>

// Определение типа для хранилища
export type StoreType = Store<RootState, AnyAction>

 let reducers = combineReducers({
     profileReducer,
     dialogsReducer,
     sidebarReducer
 })

export let store: StoreType = createStore(reducers);

