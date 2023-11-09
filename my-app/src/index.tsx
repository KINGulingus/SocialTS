import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import StoreContext from "./StoreContext";

const renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
                </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderApp();
store.subscribe(renderApp);