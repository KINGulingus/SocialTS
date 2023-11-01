
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/store";
/*import store from './redux/store'
* раньше все было так как сверху и все работало,но димыч в 42 уроке самурая (10:58+-)
* заменяет этот стор,на редаксовский и тут у меня возникает проблема с типизацией
* + проблема с вызовом функции getState,которую мы раньше сами написали,а сейчас используем
* редаксовскую.в новой версии все данные в редюсерах и лежат посути,но как этим всем пользоваться я хз
* */
import store from './redux/redux-store'



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
store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state);
})
