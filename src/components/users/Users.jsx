import React from 'react';
import './users.css';
import userAvatar from '../../assets/images/User.png';

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div className='users'>

        <div className='users__page-count'>
            {pages.map(p => {
                return <span className={props.currentPage === p ? 'active' : ''}
                    onClick={() => { props.onPageChanget(p) }}> {p} </span>
            })}
        </div>

        {props.users.map((u) => {
            return (
                <div key={u.id} className='user'>
                    <div>
                        <div className='user__avatar'>
                            <img src={u.photos.large !== null ? u.photos.large : userAvatar} />
                        </div>
                        <div className='user__btn'>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Отписаться</button>
                                : <button onClick={() => props.follow(u.id)}>Подписаться</button>
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