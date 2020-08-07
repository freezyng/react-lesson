import React from 'react';
import Post from './Post/Post.jsx';
import './MyPosts.css';



const MyPosts = (props) => {

    let myPostsMessageComponents = props.myPostsMessage.map((myPost) => {
        return <Post message={myPost.message} likes={myPost.likes} myAvatarURL={props.myAvatarURL} />
    });
    
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.upDateNewMyPostText(text);
    }

    return (
        <div className="my_posts">
            <h3>Новый пост</h3>
            <div className="my_posts__new_post">
                <textarea onChange={ onPostChange } ref={ newPostElement } value={props.newPostText} placeholder='Написать...'></textarea>
                <button onClick={ onAddPost } className="my_posts__btn btn">Пост</button>
            </div>
            <h3>Мои посты</h3>
      
            <div className="my_posts__posts">
                { myPostsMessageComponents }
            </div>
        </div>
    );
}

export default MyPosts;