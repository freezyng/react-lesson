import React from 'react';
import './users.css';
import userAvatar from '../../assets/images/User.png';
import {NavLink} from 'react-router-dom';
import {followedDelete, followedPost} from './../../api/api';



const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div className='users'>

        <div className='users__page-count-wrap'>
            <div className='users__page-count__left'>&#8249;</div>
            <div className='users__page-count'>
                <div>
                    {pages.map(p => {
                        return <span key={p} className={props.currentPage === p ? 'active' : ''}
                            onClick={() => { props.onPageChanget(p) }}> {p} </span>
                    })}
                </div>
            </div>
            <div className='users__page-count__right'>&#8250;</div>
        </div>

        {props.users.map((u) => {
            return (
                <div key={u.id} className='user'>
                    <div>
                        <div className='user__avatar'>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.large !== null ? u.photos.large : userAvatar} />
                            </NavLink>
                        </div>
                        <div className='user__btn'>
                            {u.followed
                                ? <button onClick={() => {
                                    followedDelete(u.id)
                                        .then(response => {
                                            if(response.resultCode === 0){
                                                props.unfollow(u.id)
                                            }
                                    })
                                    }
                                }>Отписаться</button>
                                : <button onClick={() => {
                                    followedPost(u.id)
                                        .then(response => {
                                            if(response.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                        })
                                    }}>Подписаться</button>
                            }
                        </div>
                    </div>
                    <div className='user__info'>
                        <div className='user__info-name'> {u.name} </div>
                        <div className='user__info-status'> {u.status} </div>
                        {/* <div className='user__info-location'> {u.location.city} <br/> {u.location.country} </div> */}
                    </div>
                </div>
            )
        })}
    </div>
}

export default Users;