import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Nav from "./comp/NavBar/Nav";
import Profile from "./comp/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./comp/Dialogs/DialogsContainer";

const App: React.FC<any> = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/profile" element={<Profile/>}/>

                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
