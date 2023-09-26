import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, RootStateType} from "./redux/State";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let rerenderEntireTree=(state:RootStateType)=>{
root.render(
    <React.StrictMode>
        <App state={state} addPost={addPost} />
    </React.StrictMode>
)};

