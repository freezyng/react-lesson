import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsersThunk, followThunk, unfollowThunk} from '../../redux/users-reducer';
import Users from './Users';
import preLoader from './../../assets/images/usersPreloader.svg';


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
        usersLoader: state.usersPage.usersLoader,
        followInProgress: state.usersPage.followInProgress
    }
}


let UsersContainer = connect(mapStateToProps, { 
    follow, unfollow, getUsersThunk, unfollowThunk, followThunk})(UsersAPIContainer);

export default UsersContainer;