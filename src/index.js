import {store} from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export let rerenderAllComponent = (state) => {
    ReactDOM.render(
        <App state={state} store={store} dispatch={store.dispatch.bind(store)} />, document.getElementById('root')
    );
}

rerenderAllComponent(store.getState());

store.subscribe(() => {
    rerenderAllComponent(store.getState());
});

serviceWorker.unregister();