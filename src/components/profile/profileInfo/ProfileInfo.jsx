import React, { useState } from 'react';
import './ProfileInfo.css';
import preLoader from './../../../assets/images/usersPreloader.svg';
import ProfileStatus from './ProfileStatus';
import avatarStandart from './../../../assets/images/User.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(true);

    if (!props.profile) {
        return <div className='profile__preloader'>{<img src={preLoader} alt='1' />}</div>
    }
    
    let profileSocialContacts = [];

    for (let key in props.profile.contacts) {
        profileSocialContacts.push({ name: key, link: props.profile.contacts[key] });
    }

    
    const onSubmit = (formData) => {
        props.saveProfile(formData)
        setEditMode(!editMode)
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
                {props.isOwner 
                    ? <div> 
                        <input type="file" id="input__file" className="input__file" onChange={onPhotoSelected} multiple/>
                        <label htmlFor="input__file">
                            <span className="btn btn-input__file">Загрузить фото</span>
                        </label>
                    </div>
                    : ''}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

            {editMode   ? <ProfileData isOwner={props.isOwner} profile={props.profile} editMode={editMode} 
                                        setEditMode={setEditMode} profileSocialContacts={profileSocialContacts}/> 
                        : <ProfileDataForm initialValues={props.profile} profile={props.profile} editMode={editMode} 
                                            setEditMode={setEditMode} onSubmit={onSubmit} profileSocialContacts={profileSocialContacts} />
            }

        </div>
    )
}


const ProfileData = (props) => {
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
                    Навыки: {props.profile.lookingForAJobDescription}
                </div>}
            </div>
            {props.profileSocialContacts && <div className="profile__contacts">
                <h3>Мои контакты</h3>
                {props.profileSocialContacts.map((c) => {
                    return c.link ? <div>{`${c.name}: `} <a href={c.link}>{c.link}</a></div>
                        : null
                })
                }
            </div>}
            {props.isOwner && <button className="btn btn-profile-data" onClick={() => props.setEditMode(!props.editMode)}>Редактировать</button>}
        </>
    )
}

export default ProfileInfo;