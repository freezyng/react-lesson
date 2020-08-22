import React from 'react';
import './users.css';
import * as axios from 'axios';
import userAvatar from '../../assets/images/User.png'

let Users = (props) => {

    

    if(!props.users.length) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( (response) => {
        props.setUsers([ ...response.data.items ])
    })
    }




    return <div className='users'>
        {
            props.users.map( (u) => {
                return (
                <div key={u.id} className='user'>
                    <div>
                        <div className='user__avatar'>
                            <img src={u.photos.large !== null ? u.photos.large : userAvatar } />
                        </div>
                        <div className='user__btn'>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id) }>Отписаться</button>
                                : <button onClick={() =>  props.follow(u.id) }>Подписаться</button>
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
            })
        }
    </div>
}

export default Users;