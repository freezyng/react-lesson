import { usersAPI } from './../api/api';
import { updateFollow } from './../components/utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const USERS_LOADER = 'USERS_LOADER';
const TOGGLE_IS_FOLLOW_PROGRESS = 'TOGGLE_IS_FOLLOW_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: null,
    currentPage: 1,
    usersLoader: true,
    followInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: updateFollow(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateFollow(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.numPage
            }
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case USERS_LOADER:
            return {
                ...state,
                usersLoader: action.usersLoader
            }
        case TOGGLE_IS_FOLLOW_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }

}

const follow = (userId) => {
    return { type: FOLLOW, userId }
}
const unfollow = (userId) => {
    return { type: UNFOLLOW, userId }
}
const setUsers = (users) => {
    return { type: SET_USERS, users }
}
const setCurrentPage = (numPage) => {
    return { type: SET_CURRENT_PAGE, numPage }
}
const setTotalUsersCount = (totalCount) => {
    return { type: TOTAL_USERS_COUNT, totalCount }
}
const setUsersLoader = (usersLoader) => {
    return { type: USERS_LOADER, usersLoader }
}
const toggleIsFollowingProgress = (isFetching, userId) => {
    return { type: TOGGLE_IS_FOLLOW_PROGRESS, isFetching, userId }
}

const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setUsers([]));
        dispatch(setUsersLoader(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize).then((response) => {
            dispatch(setUsersLoader(false));
            dispatch(setUsers([...response.items]));
            dispatch(setTotalUsersCount(response.totalCount));
        });
    }
}

const toggleFollow = async (userId, dispatch, followed, followCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await followed(userId);
    if (response.resultCode === 0) {
        dispatch(followCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));

}

const unfollowThunk = (userId) => {
    return (dispatch) => {
        toggleFollow(userId, dispatch, usersAPI.followedDelete.bind(usersAPI), unfollow)
    }
}

const followThunk = (userId) => {
    return (dispatch) => {
        toggleFollow(userId, dispatch, usersAPI.followedPost.bind(usersAPI), follow)
    }
}



export { usersReducer, unfollowThunk, followThunk, follow, unfollow, getUsersThunk };