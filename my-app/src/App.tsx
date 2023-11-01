import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Nav from "./comp/NavBar/Nav";
import Profile from "./comp/Profile/Profile";
import Dialogs from "./comp/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store, {RootStateType, StoreType} from "./redux/store";
import {ActionsType} from "./redux/store";


//пишем типизацию состояния. можно и через type.
type AppProps = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
    store: StoreType
}

//здесь мы пишем что мы принимаем пропсы в которых есть state
const App = (props: AppProps) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs store={props.store} dispatch={props.dispatch}/>}/>
                        <Route path="/profile" element={<Profile profilePage={store.getState().profilePage} dispatch={props.dispatch}/>}/>

                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
