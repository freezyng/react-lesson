import React from 'react';

let Users = (props) => {

    if(!props.users.length) {
        props.setUsers([
            { id: 2, followed: true, fullName: 'Alyosha', status: 'lolololo', location: {city: 'Minsk', country: 'Belarus'} },
            { id: 3, followed: true, fullName: 'Alyosha', status: 'lolololo', location: {city: 'Minsk', country: 'Belarus'} },
            { id: 4, followed: true, fullName: 'Alyosha', status: 'lolololo', location: {city: 'Minsk', country: 'Belarus'} } 
        ])
    }




    return <div className='users'>
        {
            props.users.map( (u) => {
                return <div key={u.id} className='user'>
                    <div>
                        <div className='user__avatar'>
                            <img src='' />
                        </div>
                        <div className='user__btn'>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id) }>Отписаться</button>
                                : <button onClick={() =>  props.follow(u.id) }>Подписаться</button>
                            }
                        </div>
                    </div>
                    <div className='user__info'>
                        <div className='user__info-name'> {u.fullName} </div>
                        <div className='user__info-status'> {u.status} </div>
                        <div className='user__info-location'> {u.location.city} <br/> {u.location.country} </div>
                    </div>
                </div>
            })
        }
    </div>
}

export default Users;