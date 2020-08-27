import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';


class UsersAPIContainer extends React.Component {

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
        return <Users 
            users={this.props.users}
            onPageChanget={this.onPageChanget}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    }
}


let UsersContainer = connect(mapStateToProps, mapDicpatchToProps)(UsersAPIContainer);

export default UsersContainer;