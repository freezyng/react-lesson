const FOLLOW = 'FOLLOW';    
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const USERS_LOADER = 'USERS_LOADER';
const TOGGLE_IS_FOLLOW_PROGRESS = 'TOGGLE_IS_FOLLOW_PROGRESS';

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 20,
    currentPage: 1,
    usersLoader: true,
    followInProgress: []
} 

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
       
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userId) {
                        return{ ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userId) {
                        return{ ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return{
                ...state, 
                users: action.users 
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.numPage
            }
        case TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalCount
            }
        case USERS_LOADER:
            return{
                ...state,
                usersLoader: action.usersLoader
            }
        case TOGGLE_IS_FOLLOW_PROGRESS:
            return{
                ...state,
                followInProgress: action.isFetching
                ? [...state.followInProgress, action.userId]
                : state.followInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }

}

const followAC = (userId) => {
    return {type: FOLLOW, userId}
}
const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}
const setUsersAC = (users) => {
    return {type: SET_USERS, users}
}
const setCurrentPageAC = (numPage) => {
    return {type: SET_CURRENT_PAGE, numPage}
}
const setTotalUsersCountAC = (totalCount) => {
    return {type: TOTAL_USERS_COUNT, totalCount}
}
const setUsersLoaderAC = (usersLoader) => {
    return {type: USERS_LOADER, usersLoader}
}
const toggleIsFollowingProgressAC = (isFetching, userId) => {
    return {type: TOGGLE_IS_FOLLOW_PROGRESS, isFetching, userId}
}



export  {usersReducer, followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setUsersLoaderAC, toggleIsFollowingProgressAC};