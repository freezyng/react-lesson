import React from 'react';
import Post from './Post/Post.jsx';
import './MyPosts.css';

const MyPosts = (props) => {

    let myPostsMessageComponents = props.myPostsMessage.map((myPost) => {
        return <Post message={myPost.message} likes={myPost.likes} />
    });
    
    let newMyPostText = React.createRef();

    let getPost = () => {
        let text = newMyPostText.current.value;
        props.addPost(text);
        newMyPostText.current.value = '';
    }

    return (
        <div className="my_posts">
            <h3>Новый пост</h3>
            <div className="my_posts__new_post">
                <textarea ref={newMyPostText}></textarea>
                <button onClick={ getPost } className="my_posts__btn btn">Пост</button>
            </div>
            <h3>Мои посты</h3>
      
            <div className="my_posts__posts">
                { myPostsMessageComponents }
            </div>
        </div>
    );
}

export default MyPosts;