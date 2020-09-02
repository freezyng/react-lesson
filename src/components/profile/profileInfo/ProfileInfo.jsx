import React from 'react';
import preLoader from './../../../assets/images/usersPreloader.svg';

const ProfileInfo = (props) => {
    
    if(!props.profile) {
        return <div className='profile__preloader'>{ <img src={preLoader} />}</div>
    }

    let arrayContacts = () => {
        let a = [];
        for(let key in props.profile.contacts) {
            a.push(<div>{key}: {props.profile.contacts[key]}</div>);
        }
        return a;
    }

    return(  
        <div className="profile-info">
            <div className="profile__avatar">
                <img src={props.profile.photos.large} alt="avatar" />
            </div>
            <div className="profile__description">
                <div className="profile__fullName">
                    {props.profile.fullName}
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
            <div className="profile__contacts">
                {arrayContacts()}
            </div>
        </div>
    )
}


export default ProfileInfo;