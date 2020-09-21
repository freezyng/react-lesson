import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setUsersLoaderAC } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import preLoader from './../../assets/images/usersPreloader.svg';
import { getUsers } from '../../api/api';


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.setUsersLoader(true);
        getUsers(this.props.currentPage, this.props.pageSize).then( (response) => {
            this.props.setUsersLoader(false);
            this.props.setUsers([ ...response.items ]);
            this.props.setTotalUsersCount( response.totalCount );
        });
    }

    onPageChanget = (numPage) => {
        this.props.setUsersLoader(true);
        this.props.setUsers([])
        this.props.setCurrentPage(numPage);
        getUsers(numPage, this.props.pageSize).then( (response) => {
            this.props.setUsersLoader(false)
            this.props.setUsers([ ...response.items ]);
        });
    }

    render() {
        return <div>
            <Users
                users={this.props.users}
                onPageChanget={this.onPageChanget}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
            <div className='users__preloader'>{ this.props.usersLoader ? <img src={preLoader} /> : null}</div>
        </div>
    }
}

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        usersLoader: state.usersPage.usersLoader
    }
}

let mapDicpatchToProps = (dispatch) =>{
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (numPage) => {
            dispatch(setCurrentPageAC(numPage))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        },
        setUsersLoader: (usersLoader) => {
            dispatch(setUsersLoaderAC(usersLoader))
        }
    }
}


let UsersContainer = connect(mapStateToProps, mapDicpatchToProps)(UsersAPIContainer);

export default UsersContainer;