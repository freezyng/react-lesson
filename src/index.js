import {rerenderReact} from './render.js';
import {state, addPost} from './state.js';



rerenderReact(
    state.dialogsPage.dialogsData, 
    state.dialogsPage.dialogsMessage, 
    state.profilePage.myPostsMessage, 
    addPost
);