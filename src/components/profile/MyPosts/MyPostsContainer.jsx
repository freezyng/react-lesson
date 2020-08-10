import React from 'react';
import MyPosts from './MyPosts.jsx';
import {addPostCreator, upDateNewMyPostTextCreator} from '../../../redux/profile-reducer.js';
import StoreContext from '../../../StoreContext.js';



const MyPostsContainer = (props) => {
    return(
        <StoreContext.Consumer>
        {   (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostCreator());
                }
                let upDateNewMyPostText = (text) => {
                    store.dispatch(upDateNewMyPostTextCreator(text));
                }

                return ( <MyPosts 
                    upDateNewMyPostText={upDateNewMyPostText} 
                    addPost={addPost}
                    myPostsMessage={state.profilePage.myPostsMessage} 
                    newPostText={state.profilePage.newPostText} 
                    myAvatarURL={state.profilePage.myAvatarURL} /> 
                )
            }
        }
        </StoreContext.Consumer> );
}

export default MyPostsContainer;