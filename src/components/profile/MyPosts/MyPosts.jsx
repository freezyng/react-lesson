import React from 'react';
import Post from './Post/Post.jsx';
import './MyPosts.css';
import { Field, reduxForm } from 'redux-form';



const MyPosts = (props) => {

    let myPostsMessageComponents = props.myPostsMessages.map((myPost) => {
        return <Post message={myPost.message} key={myPost.id} likes={myPost.likes} myAvatarURL={props.myAvatarURL} />
    });
    

    let addNewMyPost = (formData) => {
        props.addPost(formData.newMyPost);
    }

    return (
        <div className="my_posts">
            <h3>Новый пост</h3>

            <MyPostFormRedux  onSubmit={addNewMyPost} />

            <h3>Мои посты</h3>
      
            <div className="my_posts__posts">
                { myPostsMessageComponents }
            </div>
        </div>
    );
}

const MyPostForm = (props) => {
    return(
        <form className="my_posts__new_post" onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMyPost' placeholder='Написать...'/>
            <button className="my_posts__btn btn">Пост</button>
        </form>
    );
}

const MyPostFormRedux = reduxForm({form: 'MyPostForm'})(MyPostForm);


export default MyPosts;