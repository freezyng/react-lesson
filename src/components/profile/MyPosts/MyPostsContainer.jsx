import React from 'react';
import MyPosts from './MyPosts.jsx';
import {addPostCreator, upDateNewMyPostTextCreator} from '../../../redux/profile-reducer.js';



const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    let upDateNewMyPostText = (text) => {
        props.store.dispatch(upDateNewMyPostTextCreator(text));
    }

    return(<MyPosts upDateNewMyPostText={upDateNewMyPostText} 
        addPost={addPost}
        myPostsMessage={state.profilePage.myPostsMessage} 
        newPostText={state.profilePage.newPostText} 
        myAvatarURL={state.profilePage.myAvatarURL} />);
}

export default MyPostsContainer;