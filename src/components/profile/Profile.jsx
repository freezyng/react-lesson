import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo    profile={props.profile} status={props.status} updateStatus={props.updateStatus} 
                            isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;