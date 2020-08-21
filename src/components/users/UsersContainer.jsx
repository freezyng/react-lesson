import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
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
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDicpatchToProps)(Users);

export default UsersContainer;