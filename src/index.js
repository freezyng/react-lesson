import {store} from './state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export let rerenderAllComponent = (state) => {
    ReactDOM.render(
    <App state={state} 
        updateNewMyPostText={store.updateNewMyPostText.bind(store)}
        addMyPost={store.addMyPost.bind(store)}
        />, document.getElementById('root'));
}

rerenderAllComponent(store.getState());

store.subscribe(rerenderAllComponent);

serviceWorker.unregister();