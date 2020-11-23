import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsersThunk, followThunk, unfollowThunk} from '../../redux/users-reducer';
import Users from './Users';
import preLoader from './../../assets/images/usersPreloader.svg';
import {isAuthSelector, followInProgressSelector, usersLoaderSelector, currentPageSelector, totalUsersCountSelector, pageSizeSelector, getUsersSelector} from './../../redux/usersContainer-selectors';


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanget = (currentPage) => {
        this.props.getUsersThunk(currentPage, this.props.pageSize)
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
                followInProgress= {this.props.followInProgress}
                unfollowThunk={this.props.unfollowThunk}
                followThunk={this.props.followThunk}
                isAuth={this.props.isAuth}
            />
            <div className='users__preloader'>{ this.props.usersLoader ? <img src={preLoader} alt='1'/> : null}</div>
        </div>
    }
}

let mapStateToProps = (state) =>{
    return {
        users: getUsersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        usersLoader: usersLoaderSelector(state),
        followInProgress: followInProgressSelector(state),
        isAuth: isAuthSelector(state)
    }
}


let UsersContainer = connect(mapStateToProps, { 
    follow, unfollow, getUsersThunk, unfollowThunk, followThunk})(UsersAPIContainer);

export default UsersContainer;