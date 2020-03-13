import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export let rerenderReact = (dialogsData, dialogsMessage, myPostsMessage, addPost) => {
    ReactDOM.render(
    <App 
        dialogsData={dialogsData}
        dialogsMessage={dialogsMessage}
        myPostsMessage={myPostsMessage}
        addPost={addPost}
    />, document.getElementById('root'));
}

serviceWorker.unregister();