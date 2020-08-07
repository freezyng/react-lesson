import {store} from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export let rerenderAllComponent = () => {
    ReactDOM.render(
        <App store={store} />, document.getElementById('root')
    );
}

rerenderAllComponent(store.getState());

store.subscribe(() => {
    rerenderAllComponent(store.getState());
});

serviceWorker.unregister();