import React, { useState } from 'react';
import './ProfileInfo.css';
import preLoader from './../../../assets/images/usersPreloader.svg';
import ProfileStatus from './ProfileStatus';
import avatarStandart from './../../../assets/images/User.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <div className='profile__preloader'>{<img src={preLoader} alt='1' />}</div>
    }
    
    const onSubmit = (formData) => {
        console.log(formData)
    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className="profile-info">
            <div className="profile__avatar">
                <img src={props.profile.photos.large || avatarStandart} alt="avatar" />
                {props.isOwner && <input type='file' onChange={onPhotoSelected} />}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

            {editMode ? <ProfileData isOwner={props.isOwner} profile={props.profile} editMode={editMode} setEditMode={setEditMode}/> 
                    : <ProfileDataForm profile={props.profile} editMode={editMode} setEditMode={setEditMode} onSubmit={onSubmit}/> }

        </div>
    )
}


const ProfileData = (props) => {
    
    let profileSocialContacts = [];

    for (let key in props.profile.contacts) {
        if (props.profile.contacts[key]) {
            profileSocialContacts.push({ name: key, link: props.profile.contacts[key] });
        }
    }
    return (
        <>
            <div className="profile__description">
                <div className="profile__fullName">
                    <h2>{props.profile.fullName}</h2>
                </div>
                <br />
                <div className="profile__aboutMe">
                    Обо мне: {props.profile.aboutMe}
                </div>
                <br />
                <div className="profile__lookingForAJob">
                    В поисках работы: {props.profile.lookingForAJob ? 'да' : 'нет'}
                </div>
                <br />
                {props.profile.lookingForAJobDescription && <div className="profile__lookingForAJobDescription">
                    Описание работы которую ищу: {props.profile.lookingForAJobDescription}
                </div>}
            </div>
            {profileSocialContacts && <div className="profile__contacts">
                <h3>Мои контакты</h3>
                {profileSocialContacts.map((c) => {
                    return <div>{`${c.name}: `} <a href={`http://${c.link.replace('https://', '').replace('http://', '')}`}>
                        {`${c.link.replace('https://', '').replace('http://', '')}`}</a></div>
                })
                }
            </div>}
            {props.isOwner && <button className="btn btn-profile-data" onClick={() => props.setEditMode(!props.editMode)}>Редактировать</button>}
        </>
    )
}

export default ProfileInfo;