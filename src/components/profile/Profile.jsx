import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <div className="profile-info">
                <div className="profile__avatar">
                    <img src="https://crazymemas.ru/wp-content/uploads/2019/05/29.png" alt="avatar" />
                    Аватарка
                </div>
                <div className="description">
                    Описание
                </div>
            </div>
            <MyPosts myPostsMessage={props.myPostsMessage} 
                                    dispatch={props.dispatch}
                                    newPostText={props.newPostText}/>
        </div>
    );
}

export default Profile;
