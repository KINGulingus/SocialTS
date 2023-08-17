import React from 'react';
import './App.css';
import Header from "./comp/Header/Header";
import Nav from "./comp/NavBar/Nav";
import Profile from "./comp/Profile/Profile";


const App = () => {
    return (
        <div className='app-wrapper'>

            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}


export default App;
