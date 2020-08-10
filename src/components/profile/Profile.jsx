import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfoContainer from './profileInfo/ProfileInfoContainer.jsx';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfoContainer />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
