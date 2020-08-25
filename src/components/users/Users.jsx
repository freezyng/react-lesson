import React from 'react';
import './users.css';
import * as axios from 'axios';
import userAvatar from '../../assets/images/User.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( (response) => {
            this.props.setUsers([ ...response.data.items ]);
            this.props.setTotalUsersCount( response.data.totalCount );
        });
    }

    onPageChanget = (numPage) => {
        this.props.setCurrentPage(numPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`).then( (response) => {
            this.props.setUsers([ ...response.data.items ])
        });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for(let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return <div className='users'>

            <div className='users__page-count'>
                { pages.map( p => {
                    return <span className={this.props.currentPage === p ? 'active' : ''}
                    onClick={ () => { this.onPageChanget(p) } }> {p} </span>
                })}
            </div>

            {this.props.users.map( (u) => 
            {
                return (
                <div key={u.id} className='user'>
                    <div>
                        <div className='user__avatar'>
                            <img src={u.photos.large !== null ? u.photos.large : userAvatar } />
                        </div>
                        <div className='user__btn'>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id) }>Отписаться</button>
                                : <button onClick={() =>  this.props.follow(u.id) }>Подписаться</button>
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
}

export default Users;