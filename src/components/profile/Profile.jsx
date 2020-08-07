import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './profileInfo/ProfileInfo.jsx';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo store={props.store}/>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;
