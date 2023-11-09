import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Nav from "./comp/NavBar/Nav";
import Profile from "./comp/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RootStateType, StoreType} from "./redux/store";
import {ActionsType} from "./redux/store";
import DialogsContainer from "./comp/Dialogs/DialogsContainer";


//пишем типизацию состояния. можно и через type.
type AppProps = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
    store: StoreType
}

const App: React.FC<AppProps> = ({ state, dispatch, store }) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer store={store} dispatch={dispatch}/>}/>
                        <Route path="/profile" element={<Profile store={store}/>}/>

                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
