import {store} from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from './StoreContext';

export let rerenderAllComponent = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root')
    );
}

rerenderAllComponent(store.getState());

store.subscribe(() => {
    rerenderAllComponent(store.getState());
});

serviceWorker.unregister();