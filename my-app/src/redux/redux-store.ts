import {AnyAction, combineReducers, legacy_createStore as createStore, Store} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

// Определение типа для состояния хранилища
//typeof сам генерит типизацию на основе reducers , не пиши any
export type RootState = ReturnType<typeof reducers>

// Определение типа для хранилища
export type StoreType = Store<RootState, AnyAction>

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer
})

export let store: StoreType = createStore(reducers);

