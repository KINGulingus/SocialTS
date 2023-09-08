import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/State";



export let posts = [
    {id: 1, message: 'WADDUB BUDDY', likes: 33},
    {id: 2, message: 'Oh !', likes: 88},
    {id: 3, message: 'hi ', likes: 14},
    {id: 4, message: 'Mark!', likes: 88},
]

export let dialogs = [
    {id: 1, name: "Gleb"},
    {id: 2, name: "Slava"},
    {id: 3, name: "Sanya"},
    {id: 4, name: "Bim"},
    {id: 5, name: "Max"}
]
export let messages = [
    {id: 1, message: "hi"},
    {id: 2, message: "how"},
    {id: 3, message: "are"},
    {id: 4, message: "you"},
    {id: 5, message: "bitch"}
]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
