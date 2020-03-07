import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <div className="profile-info">
                <div className="profile__avatar">
                    <img src="https://slide-share.ru/image/1696999.jpeg" alt="avatar" />
                    Аватарка
                </div>
                <div className="description">
                    Описание
                </div>
            </div>
            <MyPosts myPostsMessage={props.myPostsMessage} />
        </div>
    );
}

export default Profile;
