import React from 'react';
import Post from './Post/Post.jsx';
import './MyPosts.css';
import {addPostActionCreater, upDateNewMyPostTextActionCreater} from '../../../state.js';



const MyPosts = (props) => {
    let myPostsMessageComponents = props.myPostsMessage.map((myPost) => {
        return <Post message={myPost.message} likes={myPost.likes} />
    });
    
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(upDateNewMyPostTextActionCreater(text));
    }

    return (
        <div className="my_posts">
            <h3>Новый пост</h3>
            <div className="my_posts__new_post">
                <textarea onChange={ onPostChange } ref={ newPostElement } value={props.textareaNewText}></textarea>
                <button onClick={ addPost } className="my_posts__btn btn">Пост</button>
            </div>
            <h3>Мои посты</h3>
      
            <div className="my_posts__posts">
                { myPostsMessageComponents }
            </div>
        </div>
    );
}

export default MyPosts;