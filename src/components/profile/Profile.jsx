import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;