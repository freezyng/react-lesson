import React from 'react';

const ProfileInfo = (props) => {
    let avatar = props.avatar;

    return(  
        <div className="profile-info">
            <div className="profile__avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="description">
                Описание
            </div>
        </div>
    )
}


export default ProfileInfo;