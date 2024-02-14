import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore, Store} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {thunk as thunkMiddleware} from "redux-thunk"


export type RootState = ReturnType<typeof reducers>


export type StoreType = Store<RootState, AnyAction>

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer
})

export let store: StoreType = createStore(reducers,applyMiddleware(thunkMiddleware));

