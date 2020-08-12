import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export let rerenderAllComponent = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderAllComponent(store)

store.subscribe(() => {
    rerenderAllComponent(store)
})

serviceWorker.unregister()