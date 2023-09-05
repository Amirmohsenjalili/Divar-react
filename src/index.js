import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import style from "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} className={style}>
            <App />
    </Provider>
    );


