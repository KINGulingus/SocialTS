import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Nav from "./comp/NavBar/Nav";
import Profile from "./comp/Profile/Profile";
import Dialogs from "./comp/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/State";


//пишем типизацию состояния. можно и через type.
type AppProps = {
    state: RootStateType;
}

//здесь мы пишем что мы принимаем пропсы в которых есть state
const App = (props:AppProps) => {
    //тут мы разворачиваем пропсы чтобы удобнее использовать state. можно это не делать и обращаться к нему props.state
    const { state } = props;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*передаем данные в компоненты ниже. по такой же логике*/}
                        {/*в Dialogs я принимаю по другому просто для наглядности, можешь поменять как тебе больше нравиться.*/}
                        {/*но сделай чтобы везде было одинаково */}
                        <Route path="/dialogs" element={<Dialogs state={state} />}/>
                        <Route path="/profile" element={<Profile state={state}/>}/>

                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
