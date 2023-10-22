
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/State";
import store from './redux/State'



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let rerenderEntireTree=(state:RootStateType)=>{
    root.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
            {/*<App state={store.getState()} addPost={store.addPost.bind(store)} updateNewText={store.updateNewText.bind(store)} />*/}
        </React.StrictMode>
    )};


rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
