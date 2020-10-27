import React from 'react';
import preLoader from './../../../assets/images/usersPreloader.svg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <div className='profile__preloader'>{ <img src={preLoader} alt='1'/>}</div>
    }

    let profileSocialContacts = [];

    for(let key in props.profile.contacts) {
        if(props.profile.contacts[key]){
            profileSocialContacts.push(`${key}: ${props.profile.contacts[key]}`);
        }
    }   
    return(
        
        <div className="profile-info">
            <div className="profile__avatar">
                <img src={props.profile.photos.large} alt="avatar" />
            </div>
            <div className="profile__description">
                <div className="profile__fullName">
                    <h2>{props.profile.fullName}</h2>
                </div>
                <br/>
                <div className="profile__aboutMe">
                    Обо мне: {props.profile.aboutMe}
                </div>
                <br/>
                <div className="profile__lookingForAJob">
                    В поисках работы: {props.profile.lookingForAJob ? 'да' : 'нет'}
                </div>
                <br/>
                <div className="profile__lookingForAJobDescription">
                    Описание работы которую ищу: {props.profile.lookingForAJobDescription}
                </div>
            </div>
            
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

            <div className="profile__contacts">
                {profileSocialContacts.map(c => {
                    return <div>{c}</div>
                })}
            </div>
        </div>
    )
}


export default ProfileInfo;