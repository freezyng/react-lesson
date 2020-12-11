import React, {useState} from 'react';
import './users.css';
import userAvatar from '../../assets/images/User.png';
import {NavLink} from 'react-router-dom';


const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionPagesVisible = 15;
    let portionCount = Math.ceil(pageCount / portionPagesVisible);
    let [portionNumberThis, setPortionNumber] = useState(1);
    let leftPositionPageNumber = (portionNumberThis - 1) * portionPagesVisible + 1;
    let rightPositionpageNumber = portionNumberThis * portionPagesVisible;


    return <div className='users'>

        <div className='users__page-count-wrap'>
            <button  disabled={portionNumberThis < 2 ? 'disabled' : ''} className='users__page-count__left' onClick={() =>{setPortionNumber(portionNumberThis - 1)}} >&#8249;</button>
            <div className='users__page-count'>
                <div>
                    {pages.filter( p => p >= leftPositionPageNumber && p <= rightPositionpageNumber)
                    .map(p => {
                        return <span key={p} className={props.currentPage === p ? 'active' : ''}
                            onClick={() => { props.onPageChanget(p) }}> {p} </span>
                    })}
                </div>
            </div>
            <button disabled={portionCount < (portionNumberThis + 1) ? 'disabled' : ''} className='users__page-count__right' onClick={() => {setPortionNumber(portionNumberThis + 1)}} >&#8250;</button>
        </div>

        {props.users.map((u) => {
            return (
                <div key={u.id} className='user'>
                    <div>
                        <div className='user__avatar'>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.large !== null ? u.photos.large : userAvatar} alt='1'/>
                            </NavLink>
                        </div>
                        <div className='user__btn'>
                            {u.followed
                                ? <button disabled={props.followInProgress.some(id => id === u.id)}
                                    onClick={() => { props.unfollowThunk(u.id) }
                                }>Отписаться</button>
                                : <button disabled={props.followInProgress.some(id => id === u.id)} 
                                    onClick={() => { props.followThunk(u.id) }
                                }>Подписаться</button>
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