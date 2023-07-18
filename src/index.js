import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';

import ThemeContextProvider from './context/ThemeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </Provider>
    );

