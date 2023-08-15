import React from 'react';
import './App.css';
import Header from "./comp/Header";
import Nav from "./comp/Nav";
import Profile from "./comp/Profile";


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
