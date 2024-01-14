import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Nav from "./comp/NavBar/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./comp/Dialogs/DialogsContainer";
import UsersContainer from "./comp/Users/UsersContainer";
import ProfileContainer from "./comp/Profile/ProfileContainer";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
