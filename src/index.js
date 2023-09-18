import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import style from "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} className={style}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    );


